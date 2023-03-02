// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterComponents } from '../event/componentEvents.js';
import {
  findAllComponents,
  findComponentByName,
  createComponent,
} from '../domain/components.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllComponents = async (req, res) => {
  console.log('get all components');
  try {
    // Find all components
    const foundComponents = await findAllComponents();

    // If no found components
    if (!foundComponents) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found components',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComponents.emit('get-all-components', req.user);
    return sendDataResponse(res, 200, { components: foundComponents });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewComponent = async (req, res) => {
  console.log('createNewComponent');
  const { type, name, desc, mainImage, price } = req.body;
  console.log(req.body);
  try {
    if (!type || !name || !desc || !mainImage || !price) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Component creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundComponent = await findComponentByName(name);
    console.log('found component', foundComponent);

    if (foundComponent) {
      return sendDataResponse(res, 400, {
        component: 'Component name already exists',
      });
    }

    const createdComponent = await createComponent(
      type,
      name,
      desc,
      mainImage,
      price
    );
    console.log('created component', createdComponent);

    // myEmitterComponents.emit('create-component', createdComponent);

    return sendDataResponse(res, 201, { createdComponent });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new component`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
