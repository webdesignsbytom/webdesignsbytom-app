// Status responses
const STATUS_MESSAGES = {
  200: 'success',
  201: 'success',
  400: 'fail',
  401: 'fail',
  403: 'fail',
  404: 'fail',
  500: 'error',
};

// Error responses for eventEmitter/errors
export const RESPONSE_MESSAGES = {
  ConfictEvent: 'Request conflicts with data on server',
  DeactivatedUserEvent: 'The target user account has been deactivated',
  ServerErrorEvent: 'Internal Server Error',
  CreateEventError: 'Failed to create an event',
  NotFoundEvent: 'was not found',
  NoPermissionEvent: 'You are not authorized to perform this action',
  NoValidationEvent: 'Unable to verify user',
  BadRequestEvent: 'Incorrect request syntax or malformed request',
  MissingFieldEvent: 'Missing fields in body',
};

// Data responses
export function sendDataResponse(res, statusCode, payload) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
}

// Error responses
export function sendMessageResponse(res, statusCode, message) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    message,
  });
}
