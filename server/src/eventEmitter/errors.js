
// Error
export const createErrorEvent = async (errorEvent) => {
    let userId
    if (errorEvent.user) {
      userId = errorEvent.user.id
    }
  
    await dbClient.event.create({
      data: {
        type: 'ERROR',
        topic: errorEvent.topic,
        content: `${errorEvent.code} ${errorEvent.message}`,
        receivedById: userId
      }
    })
  }
  
  class ErrorEventBase {
    constructor(user, topic) {
      this.user = user
      this.topic = topic
    }
  }
  
  export class BadRequestEvent extends ErrorEventBase {
    constructor(user, topic, message = 'Incorrect request syntax') {
      super(user, topic)
      this.code = 400
      this.message = message
    }
  }
  
  export class NoValidationEvent {
    constructor(
      message = 'Unable to verify user',
      topic = 'validate-authentication'
    ) {
      this.user = null
      this.topic = topic
      this.code = 401
      this.message = message
    }
  }
  
  export class NoPermissionEvent extends ErrorEventBase {
    constructor(
      user,
      topic,
      message = 'You are not authorized to perform this action'
    ) {
      super(user, topic)
      this.code = 403
      this.message = message
    }
  }
  
  export class NotFoundEvent extends ErrorEventBase {
    constructor(user, topic, target) {
      super(user, topic)
      this.code = 404
      this.message = `The ${target} with the provided id does not exist`
    }
  }
  
  export class ConfictEvent extends ErrorEventBase {
    constructor(user, topic, message = 'Request conflicts with data on server') {
      super(user, topic)
      this.code = 409
      this.message = message
    }
  }
  
  export class DeactivatedUserEvent extends ErrorEventBase {
    constructor(user, topic) {
      super(user, topic)
      this.code = 400
      this.message = 'The target user account has been deactivated'
    }
  }
  
  export class ServerErrorEvent extends ErrorEventBase {
    constructor(user, topic, message = 'Internal Server Error') {
      super(user, topic)
      this.code = 500
      this.message = message
    }
  }
  
  export class CreateEventError extends ServerErrorEvent {
    constructor(user, topic, message = 'Failed to create an event') {
      super(user, topic, message)
    }
  }
  
  export class OtherErrorEvent extends ErrorEventBase {
    constructor(user, topic, code, message) {
      super(user, topic)
      this.code = code
      this.message = message
    }
  }
  