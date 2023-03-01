# Errors to fix

## Need a way to detect this and return a event log

PrismaClientKnownRequestError:
Invalid `prisma.passwordReset.create()` invocation:


Unique constraint failed on the fields: (`userId`)
    at Kr.handleRequestError (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\@prisma\client\runtime\library.js:163:19499)
    at Kr.handleAndLogRequestError (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\@prisma\client\runtime\library.js:163:19031)
    at Kr.request (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\@prisma\client\runtime\library.js:163:18869)
    at async t._request (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\@prisma\client\runtime\library.js:173:9714)
    at async createPasswordResetInDB (file:///C:/Users/tom_b/Documents/code/portfolio-work/webdesignsbytom-app/server/src/controllers/utils.js:26:37)
    at async sendPasswordReset (file:///C:/Users/tom_b/Documents/code/portfolio-work/webdesignsbytom-app/server/src/controllers/users.js:293:5) {
  code: 'P2002',
  clientVersion: '4.10.1',
  meta: { target: [ 'userId' ] },
  batchRequestIdx: undefined
}