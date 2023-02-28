import dbClient from '../utils/dbClient.js';

export const findAllUsers = () => dbClient.user.findMany({});

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
  });

export const createUser = (email, password, role, firstName, lastName, country, agreedToTerms) =>
  dbClient.user.create({
    data: {
      email: email,
      password: password,
      role: role,
      firstName: firstName,
      lastName: lastName,
      country: country,
      agreedToTerms: agreedToTerms
    },
  });

export const findVerification = (userId) =>
  dbClient.userVerification.findUnique({ 
    where: { 
      userId: userId 
    } 
  });
