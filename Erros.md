# Errors to fix

## List

  1. P2002
  2.  

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
  batchRequestIdx: undefined.



TTTTT NoValidationEvent {
  user: null,
  topic: 'Invalid access token',
  code: 401,
  message: 'Unable to verify user'
}
GET /users/0c342fcd-4222-4641-bb48-b8bd842f27bf 401 5.365 ms - 69      
file:///C:/Users/tom_b/Documents/code/portfolio-work/webdesignsbytom-app/server/src/event/utils/errorUtils.js:9
  if (errorEvent.user.id) {
                      ^

TypeError: Cannot read properties of null (reading 'id')
    at createErrorEvent (file:///C:/Users/tom_b/Documents/code/portfolio-work/webdesignsbytom-app/server/src/event/utils/errorUtils.js:9:23)  
    at MyEventEmitter.<anonymous> (file:///C:/Users/tom_b/Documents/code/portfolio-work/webdesignsbytom-app/server/src/event/errorEvents.js:8:3)
    at MyEventEmitter.emit (node:events:527:28)
    at validateAuthentication (file:///C:/Users/tom_b/Documents/code/portfolio-work/webdesignsbytom-app/server/src/middleware/auth.js:94:21)  
    at Layer.handle [as handle_request] (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\express\lib\router\route.js:114:3)    at Layer.handle [as handle_request] (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\express\lib\router\index.js:284:15
    at param (C:\Users\tom_b\Documents\code\portfolio-work\webdesignsbytom-app\server\node_modules\express\lib\router\index.js:365:14)  