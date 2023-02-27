import dbClient from '../utils/dbClient.js'

export async function createVerificationInDB(userId, uniqueString) {
    console.log('creating verification');
    try {
      const newVerification = await dbClient.userVerification.create({
        data: {
          userId,
          uniqueString,
          expiresAt: new Date(Date.now() + 21600000),
        },
      })
  
      return newVerification
    } catch (err) {
      throw err
    }
  }