import dbClient from '../utils/prisma.js';
// Response strings
import { RESPONSE_MESSAGES } from '../utils/responses.js';

// Listen for error
myEmitter.on('error', (error) => createErrorEvent(error));

// Error event creation
export const createErrorEvent = async (errorEvent) => {
  let userId;
  if (errorEvent.user) {
    userId = errorEvent.user.id;
  }

  await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: errorEvent.topic,
      content: `${errorEvent.code} ${errorEvent.message}`,
      receivedById: userId,
    },
  });
};

// Error event types
class ErrorEventBase {
  constructor(user, topic) {
    this.user = user;
    this.topic = topic;
  }
}

export class BadRequestEvent extends ErrorEventBase {
  constructor(user, topic) {
    super(user, topic);
    this.code = 400;
    this.message = RESPONSE_MESSAGES.BadRequestEvent;
  }
}

export class NoValidationEvent {
  constructor(topic = 'validate-authentication') {
    this.user = null;
    this.topic = topic;
    this.code = 401;
    this.message = RESPONSE_MESSAGES.NoValidationEvent;
  }
}

export class NoPermissionEvent extends ErrorEventBase {
  constructor(user, topic) {
    super(user, topic);
    this.code = 403;
    this.message = RESPONSE_MESSAGES.NoPermissionEvent;
  }
}

export class NotFoundEvent extends ErrorEventBase {
  constructor(user, topic, target) {
    super(user, topic);
    this.code = 404;
    this.message = `${target}` + RESPONSE_MESSAGES.NotFoundEvent;
  }
}

export class ConfictEvent extends ErrorEventBase {
  constructor(user, topic) {
    super(user, topic);
    this.code = 409;
    this.message = RESPONSE_MESSAGES.ConfictEvent;
  }
}

export class DeactivatedUserEvent extends ErrorEventBase {
  constructor(user, topic) {
    super(user, topic);
    this.code = 400;
    this.message = RESPONSE_MESSAGES.DeactivatedUserEvent;
  }
}

export class ServerErrorEvent extends ErrorEventBase {
  constructor(user, topic) {
    super(user, topic);
    this.code = 500;
    this.message = RESPONSE_MESSAGES.ServerErrorEvent;
  }
}

export class CreateEventError extends ServerErrorEvent {
  constructor(user, topic, message = RESPONSE_MESSAGES.CreateEventError) {
    super(user, topic, message);
  }
}

export class OtherErrorEvent extends ErrorEventBase {
  constructor(user, topic, code, message) {
    super(user, topic);
    this.code = code;
    this.message = message;
  }
}
