# Errors to fix

## List

  1. P2002
  2.  https://stackoverflow.com/questions/45088006/nodejs-error-self-signed-certificate-in-certificate-chain

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




ateNewDesign
ERROR EVENT ServerErrorEvent {
  user: undefined,
  topic: 'Create new design',
  code: 500,
  message: 'Internal Server Error'
}
TTTTT ServerErrorEvent {
  user: undefined,
  topic: 'Create new design',
  code: 500,
  message: 'Internal Server Error'
}
POST /designs/create 500 748.069 ms - 52
C:\Users\Tom\Documents\code\main\webdesignsbytom-app\server\node_modules\@prisma\client\runtime\library.js:149
`});return process.env.NO_COLOR||i==="colorless"?(0,No.default)(B):B},"renderErrorStr"),b=new ne(g(o));throw process.env.NODE_ENV!=="production"&&Object.defineProperty(b,"render",{get:()=>g,enumerable:!1}),b}normalizePath(t,r){let n=t.slice(),i=[],o,s=r;for(;(o=n.shift())!==void 0;)!Array.isArray(s)&&o===0||(o==="select"?s[o]?s=s[o]:s=s.include:s&&s[o]&&(s=s[o]),i.push(o));return i}};l(ti,"Document");var ne=class extends Error{get[Symbol.toStringTag](){return"PrismaClientValidationError"}};l(ne,"PrismaClientValidationError");var Q=class extends Error{constructor(t){super(t+`
                                                                                          ^    

PrismaClientValidationError:
Invalid `prisma.design.findFirst()` invocation:
