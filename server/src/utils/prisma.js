// You don't need to touch this file, this is just exporting prisma so you can use it
import prisma from '@prisma/client'

let logLevel = {
    log: ['query'],
}
  
if (process.env.NODE_ENV === 'test') {
    logLevel = {}
}

const dbClient = new prisma.PrismaClient(logLevel)

export default dbClient;
