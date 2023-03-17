import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dbClient from '../utils/dbClient.js';
// Components
import { createVerificationInDB, createPasswordResetInDB } from './utils.js';
// Emitters
import { myEmitterUsers } from '../event/userEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  findAllUsers,
  findUserByEmail,
  createUser,
  findVerification,
  findResetRequest,
  findUserById,
  resetUserPassword,
  deleteUserById,
  updateUserById,
  findUsersByRole,
} from '../domain/users.js';
import { createAccessToken } from '../utils/tokens.js';
import {
  sendVerificationEmail,
  sendResetPasswordEmail,
  testEmail,
} from '../utils/sendEmail.js';
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
  ServerConflictError,
  BadRequestEvent,
} from '../event/utils/errorUtils.js';
// Time
import { v4 as uuid } from 'uuid';
import { createNewNotification } from '../domain/notifications.js';
import { createMessage } from '../domain/messages.js';
// Password hash
const hashRate = 8;

export const sendTestyEmail = async (req, res) => {
  console.log('testin');
  const { email } = req.params;
  console.log('email', email);
  await testEmail(email);
};

export const getAllUsers = async (req, res) => {
  console.log('getAllUsers');
  try {
    const foundUsers = await findAllUsers();
    if (!foundUsers) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.allUsersNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-users', req.user);
    return sendDataResponse(res, 200, { users: foundUsers });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all users`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserById = async (req, res) => {
  console.log('getUserById');
  const userId = req.params.id;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
console.log('found', foundUser)
    delete foundUser.password;
    delete foundUser.agreedToTerms;

    myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const registerNewUser = async (req, res) => {
  console.log('create new user');
  const { email, password, role, firstName, lastName, country, agreedToTerms } =
    req.body;
  const lowerCaseEmail = email.toLowerCase();

  try {
    if (
      !lowerCaseEmail ||
      !password ||
      !firstName ||
      !lastName ||
      !country ||
      !agreedToTerms
    ) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserByEmail(lowerCaseEmail);
    if (foundUser) {
      return sendDataResponse(res, 400, { email: EVENT_MESSAGES.emailInUse });
    }

    const hashedPassword = await bcrypt.hash(password, hashRate);
    const createdUser = await createUser(
      lowerCaseEmail,
      hashedPassword,
      role,
      firstName,
      lastName,
      country,
      agreedToTerms
    );

    if (!createdUser) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    myEmitterUsers.emit('register', createdUser);

    const uniqueString = uuid() + createdUser.id;
    const hashedString = await bcrypt.hash(uniqueString, hashRate);

    await createVerificationInDB(createdUser.id, hashedString);
    await sendVerificationEmail(
      createdUser.id,
      createdUser.email,
      uniqueString
    );

    const foundUsers = await findUsersByRole('ADMIN');
    foundUsers.forEach(async (admin) => {
      const message = {
        subject: 'New user registered',
        content: `New user has registered with ${email}. Check messages at link http://...`,
        userId: admin.id,
      };
      const notification = {
        type: 'MESSAGE',
        content: `New user registered: ${email}`,
        userId: admin.id,
      };

      const newMessage = await createMessage(
        message.subject,
        message.content,
        'System',
        'System',
        message.userId
      );

      if (!newMessage) {
        const notCreated = new BadRequestEvent(
          req.user,
          EVENT_MESSAGES.createMessageFail,
          'Cant create message for admin - registration form'
        );
        myEmitterErrors.emit('error', notCreated);
        return sendMessageResponse(res, notCreated.code, notCreated.message);
      }

      const newNotification = await createNewNotification(
        notification.type,
        notification.content,
        notification.userId
      );

      if (!newNotification) {
        const notCreated = new BadRequestEvent(
          req.user,
          EVENT_MESSAGES.createNotificationFail,
          'Cant create notification for admin - registration form'
        );
        myEmitterErrors.emit('error', notCreated);
        return sendMessageResponse(res, notCreated.code, notCreated.message);
      }
    });
    
    return sendDataResponse(res, 201, { createdUser });
  } catch (err) {
    // Error
    const serverError = new RegistrationServerErrorEvent(
      `Register Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const verifyUser = async (req, res) => {
  console.log('Verifying user')
  const { userId, uniqueString } = req.params;

  try {
    const foundVerification = await findVerification(userId);

    if (!foundVerification) {
      const missingVerification = new NotFoundEvent(
        userId,
        EVENT_MESSAGES.verificationNotFound
      );
      myEmitterErrors.emit('error', missingVerification);
      return sendMessageResponse(
        res,
        404,
        EVENT_MESSAGES.verificationNotFoundReturnMessage
      );
    }

    const { expiresAt } = foundVerification;
    if (expiresAt < Date.now()) {
      await dbClient.userVerification.delete({ where: { userId } });
      await dbClient.user.delete({ where: { userId } });
      return sendMessageResponse(
        res,
        401,
        EVENT_MESSAGES.expiredLinkMessage
      );
    }

    const isValidString = await bcrypt.compare(
      uniqueString,
      foundVerification.uniqueString
    );

    if (!isValidString) {
      return sendMessageResponse(
        res,
        401,
        EVENT_MESSAGES.invalidVerificationMessage
      );
    }

    const updatedUser = await dbClient.user.update({
      where: { id: userId },
      data: { isVerified: true },
    });

    delete updatedUser.password;

    const token = createAccessToken(updatedUser.id, updatedUser.email);

    await dbClient.userVerification.delete({ where: { userId } });

    sendDataResponse(res, 200, { token, user: updatedUser });
    myEmitterUsers.emit('verified', updatedUser);
  } catch (err) {
    // Create error instance
    const serverError = new RegistrationServerErrorEvent(
      `Verify New User Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const resendVerificationEmail = async (req, res) => {
  console.log('resendVerificationEmail')
  const { email } = req.params;

  if (!email) {
    const badRequest = new BadRequestEvent(EVENT_MESSAGES.missingUserIdentifier);
    return sendMessageResponse(res, badRequest.code, badRequest.message);
  }

  try {
    const foundUser = await dbClient.user.findUnique({ where: { email } });
    if (!foundUser) {
      const notFound = new NotFoundEvent('user', 'email');
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundVerification = await dbClient.userVerification.findUnique({
      where: { userId: foundUser.id },
    });

    if (!foundVerification) {
      const serverError = new ServerConflictError(
        email,
        EVENT_MESSAGES.verificationNotFoundReturnMessage
      );

      myEmitterErrors.emit('verification-not-found', serverError);
      return sendMessageResponse(res, serverError.code, serverError.message);
    }

    await dbClient.userVerification.delete({ where: { userId: foundUser.id } });

    const uniqueString = uuid() + foundUser.id;
    const hashedString = await bcrypt.hash(uniqueString, hashRate);
    await createVerificationInDB(foundUser.id, hashedString);

    await sendVerificationEmail(foundUser.id, foundUser.email, uniqueString);
    myEmitterUsers.emit('resend-verification', foundUser);
    return sendMessageResponse(res, 201, 'Verification email resent');
  } catch (err) {
    // Create error instance
    const serverError = new RegistrationServerErrorEvent(
      `Verify New User Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const sendPasswordReset = async (req, res) => {
  const { resetEmail } = req.body;

  if (!resetEmail) {
    const badRequest = new BadRequestEvent(
      null,
      'Reset Password - Missing email'
    );
    myEmitterErrors.emit('error', badRequest);
    return sendMessageResponse(res, badRequest.code, badRequest.message);
  }

  const lowerCaseEmail = resetEmail.toLowerCase();

  try {
    const foundUser = await findUserByEmail(lowerCaseEmail);

    if (!foundUser) {
      return sendDataResponse(res, 404, {
        email: EVENT_MESSAGES.emailNotFound,
      });
    }
    // Create unique string for verify URL
    const uniqueString = uuid() + foundUser.id;
    const hashedString = await bcrypt.hash(uniqueString, hashRate);

    await createPasswordResetInDB(foundUser.id, hashedString);
    await sendResetPasswordEmail(foundUser.id, foundUser.email, uniqueString);
  } catch (err) {
    // Create error instance
    const serverError = new ServerErrorEvent(
      `Request password reset Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const resetPassword = async (req, res) => {
  const { userId, uniqueString } = req.params;
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    const badRequest = new BadRequestEvent(
      userId,
      EVENT_MESSAGES.passwordMatchError
    );
    myEmitterErrors.emit('error', badRequest);
    return sendMessageResponse(res, badRequest.code, badRequest.message);
  }

  try {
    const foundResetRequest = await findResetRequest(userId);

    if (!foundResetRequest) {
      const missingRequest = new NotFoundEvent(
        userId,
        EVENT_MESSAGES.verificationNotFound
      );
      myEmitterErrors.emit('error', missingRequest);
      return sendMessageResponse(
        res,
        404,
        EVENT_MESSAGES.passwordResetError
      );
    }

    const { expiresAt } = foundResetRequest;
    if (expiresAt < Date.now()) {
      await dbClient.passwordReset.delete({ where: { userId } });
      await dbClient.user.delete({ where: { userId } });
      return sendMessageResponse(
        res,
        401,
        EVENT_MESSAGES.expiredLinkMessage
      );
    }

    const isValidString = await bcrypt.compare(
      uniqueString,
      foundResetRequest.uniqueString
    );

    if (!isValidString) {
      return sendMessageResponse(
        res,
        401,
        EVENT_MESSAGES.invalidVerificationMessage
      );
    }

    const foundUser = await findUserById(userId);

    const hashedPassword = await bcrypt.hash(password, hashRate);

    const updatedUser = await resetUserPassword(foundUser.id, hashedPassword);

    delete updatedUser.password;

    await dbClient.passwordReset.delete({ where: { userId } });

    sendDataResponse(res, 200, { user: updatedUser });
    myEmitterUsers.emit('password-reset', updatedUser);
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(`Verify New User Server error`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const updateUser = async (req, res) => {
  console.log('update user');
  const userId = req.params.userId;
  const { email, firstName, lastName, country } = req.body;

  try {
    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedUser = await updateUserById(
      userId,
      email,
      firstName,
      lastName,
      country
    );

    delete updatedUser.password;
    delete updatedUser.agreedToTerms;

    // myEmitterUsers.emit('update-user', req.user);
    return sendDataResponse(res, 200, { user: updatedUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(`Verify New User Server error`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteUser = async (req, res) => {
  console.log('deleteUser')
  const userId = req.params.userId;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteUserById(userId);
    myEmitterUsers.emit('deleted-user', req.user);
    return sendDataResponse(res, 200, {
      user: foundUser,
      message: `User ${foundUser.email} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
