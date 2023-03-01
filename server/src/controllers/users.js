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
  deleteUserById
} from '../domain/users.js';
import { createAccessToken } from '../utils/tokens.js';
import {
  sendVerificationEmail,
  sendResetPasswordEmail,
} from '../utils/sendEmail.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
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
// Password hash
const hashRate = 8;

export const getAllUsers = async (req, res) => {
  try {
    // Find all users
    const foundUsers = await findAllUsers();

    // If no found users
    if (!foundUsers) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'User database not found'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // Connect to eventEmitter
    myEmitterUsers.emit('get-all-users', req.user);
    return sendDataResponse(res, 200, { users: foundUsers });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all users`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserById = async (req, res) => {
  console.log('req', req.user);
  const userId = req.params.id
  console.log('userId', userId);

  try {
    console.log('test');
    const foundUser = await findUserById(userId)
    console.log('foundUser', foundUser);

    // If no found users
    if (!foundUser) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find user by ID'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    delete foundUser.password;
    delete foundUser.agreedToTerms

    myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });

  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const registerNewUser = async (req, res) => {
  const { email, password, role, firstName, lastName, country, agreedToTerms } =
    req.body;
  const lowerCaseEmail = email.toLowerCase();
  //
  try {
    //
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
      return sendDataResponse(res, 400, { email: 'Email already in use' });
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

    myEmitterUsers.emit('register', createdUser);

    // Create unique string for verify URL
    const uniqueString = uuid() + createdUser.id;
    console.log('unique string', uniqueString);
    const hashedString = await bcrypt.hash(uniqueString, hashRate);

    await createVerificationInDB(createdUser.id, hashedString);
    await sendVerificationEmail(
      createdUser.id,
      createdUser.email,
      uniqueString
    );

    return sendDataResponse(res, 201, { createdUser });
    //
  } catch (err) {
    //
    const serverError = new RegistrationServerErrorEvent(
      `Register Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const verifyUser = async (req, res) => {
  const { userId, uniqueString } = req.params;

  try {
    // check if the verification record exists
    const foundVerification = await findVerification(userId);
    console.log('found', foundVerification);

    if (!foundVerification) {
      const missingVerification = new NotFoundEvent(
        userId,
        'Verification record not found'
      );
      myEmitterErrors.emit('error', missingVerification);
      return sendMessageResponse(
        res,
        404,
        "Account record doesn't exist or has been verified already. Please sign up or log in."
      );
    }

    const { expiresAt } = foundVerification;
    if (expiresAt < Date.now()) {
      await dbClient.userVerification.delete({ where: { userId } });
      await dbClient.user.delete({ where: { userId } });
      return sendMessageResponse(
        res,
        401,
        'Link has expired. Please sign up again.'
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
        'Invalid verification details passed. Check your inbox.'
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
    // Store error as event
    myEmitterErrors.emit('error', serverError);
    // Send error to client
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const resendVerificationEmail = async (req, res) => {
  const { email } = req.params;
  console.log('email', email);

  if (!email) {
    const err = new BadRequestEvent('Missing user identifier');
    return sendMessageResponse(res, err.code, err.message);
  }

  try {
    const foundUser = await dbClient.user.findUnique({ where: { email } });
    console.log('found user', foundUser);
    if (!foundUser) {
      const notFound = new NotFoundError('user', 'email');
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundVerification = await dbClient.userVerification.findUnique({
      where: { userId: foundUser.id },
    });

    console.log('foundVerificion', foundVerification);
    if (!foundVerification) {
      const serverError = new ServerConflictError(
        email,
        "Account verification record doesn't exist or has been verified already."
      );
      console.log('Error');
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
    // Store error as event
    myEmitterErrors.emit('error', serverError);
    // Send error to client
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const sendPasswordReset = async (req, res) => {
  const { resetEmail } = req.body;
  console.log('res', res.data);
  console.log('res', res.error);
  console.log('reset');

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
        email: 'Email not found in database',
      });
    }
    // Create unique string for verify URL
    const uniqueString = uuid() + foundUser.id;
    console.log('unique reset string', uniqueString);
    const hashedString = await bcrypt.hash(uniqueString, hashRate);

    await createPasswordResetInDB(foundUser.id, hashedString);
    await sendResetPasswordEmail(foundUser.id, foundUser.email, uniqueString);
  } catch (err) {
    // Create error instance
    const serverError = new ServerErrorEvent(
      `Request password reset Server error`
    );
    // Store error as event
    myEmitterErrors.emit('error', serverError);
    // Send error to client
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const resetPassword = async (req, res) => {
  const { userId, uniqueString } = req.params;
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    console.log('error');
    const badRequest = new BadRequestEvent(
      userId,
      'Reset Password - New passwords do not match'
    );
    myEmitterErrors.emit('error', badRequest);
    return sendMessageResponse(res, badRequest.code, badRequest.message);
  }

  try {
    const foundResetRequest = await findResetRequest(userId);

    if (!foundResetRequest) {
      const missingRequest = new NotFoundEvent(
        userId,
        'Verification record not found'
      );
      myEmitterErrors.emit('error', missingRequest);
      return sendMessageResponse(
        res,
        404,
        "Account record doesn't exist or has been reset already."
      );
    }

    const { expiresAt } = foundResetRequest;
    if (expiresAt < Date.now()) {
      await dbClient.passwordReset.delete({ where: { userId } });
      await dbClient.user.delete({ where: { userId } });
      return sendMessageResponse(
        res,
        401,
        'Link has expired. Please sign up again.'
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
        'Invalid reset password details passed. Check your inbox.'
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
    // Create error instance
    const serverError = new ServerErrorEvent(`Verify New User Server error`);
    // Store error as event
    myEmitterErrors.emit('error', serverError);
    // Send error to client
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id

  try {
    const foundUser = await findUserById(userId)

    // If no found users
    if (!foundUser) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find user by ID'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteUserById(userId)
    myEmitterUsers.emit('deleted-user', req.user);
    return sendDataResponse(res, 200, { user: foundUser, message: `User ${foundUser.email} deleted` });

  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
}