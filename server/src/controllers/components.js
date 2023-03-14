// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterComponents } from '../event/componentEvents.js';
import {
  findAllComponents,
  findComponentByQuery,
  findComponentByName,
  createComponent,
  findComponentById,
  deleteComponentById,
} from '../domain/components.js';
// Response messages
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
} from '../event/utils/errorUtils.js';

export const getAllComponents = async (req, res) => {
  console.log('get all components');
  try {
    const foundComponents = await findAllComponents();

    if (!foundComponents) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.componentTag

      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComponents.emit('get-all-components', req.user);
    return sendDataResponse(res, 200, { components: foundComponents });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all components`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getComponentsByQuery = async (req, res) => {
  console.log('getComponentsByQuery')
  const query = req.params.query

  try {
    const foundComponent = await findComponentByQuery(query)

    if (!foundComponent) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.componentTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComponents.emit('find-component-by-query', req.user);
    return sendDataResponse(res, 200, { component: foundComponent });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Find component by query`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
}

export const createNewComponent = async (req, res) => {
  console.log('createNewComponent');
  const { type, name, desc, image, price } = req.body;

  try {
    if (!type || !name || !desc || !image || !price) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Component creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundComponent = await findComponentByName(name);

    if (foundComponent) {
      return sendDataResponse(res, 400, {
        component: 'Component name already exists',
      });
    }

    const createdComponent = await createComponent(
      type,
      name,
      desc,
      image,
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

export const deleteComponent = async (req, res) => {
  console.log('deleteComponent');
  const componentId = req.params.componentId;

  try {
    const foundComponent = await findComponentById(componentId);

    if (!foundComponent) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.componentTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteComponentById(componentId);
    myEmitterComponents.emit('deleted-component', req.user);
    return sendDataResponse(res, 200, {
      component: foundComponent,
      message: `Component ${foundComponent.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete component`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
