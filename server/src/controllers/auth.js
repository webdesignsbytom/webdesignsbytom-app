import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_EXPIRY, JWT_SECRET } from '../utils/config.js';
// Componet
import { findUserByEmail } from '../domain/users.js';
// Responses
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
// Events
import { myEmitterErrors } from '../event/errorEvents.js';
import { LoginServerErrorEvent } from '../event/utils/errorUtils.js';
import { createAccessToken } from '../utils/tokens.js';


export const login = async (req, res) => {
  const { email, password } = req.body;
  const lowerCaseEmail = email.toLowerCase();
console.log(req.body)

  if (!lowerCaseEmail || !password) {
    return sendDataResponse(res, 400, {
      email: 'Missing email and/or password provided',
    });
  }

  try {
    const existingUser = await findUserByEmail(lowerCaseEmail);
    console.log('existingUser', existingUser);

    const areCredentialsValid = await validateCredentials(password, existingUser)
    console.log('areCredentialsValid', areCredentialsValid);

    if (!areCredentialsValid) {
      return sendDataResponse(res, 400, {
        email: 'Invalid email and/or password provided'
      })
    }

    delete existingUser.password

    const token = createAccessToken(existingUser.id, existingUser.email)
    return sendDataResponse(res, 200, { token, existingUser })

  } catch (err) {
    //
    const serverError = new LoginServerErrorEvent(
      email,
      `Login Server error`
    );
    myEmitterErrors.emit('error-login', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export async function validateCredentials(password, user) {
    if (!user) {
      return false
    }
  
    if (!password) {
      return false
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return false
    }
  
    return true
  }