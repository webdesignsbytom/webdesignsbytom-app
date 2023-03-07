import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterPages } from '../event/pageEvents.js';
import {
  findAllPages,
  findPageByName,
  createPage,
  findPageById,
  deletePageById,
  findUserPagesById
} from '../domain/pages.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllPages = async (req, res) => {
  console.log('get all pages');
  try {
    // Find all pages
    const foundPages = await findAllPages();

    // If no found pages
    if (!foundPages) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found pages',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterPages.emit('get-all-pages', req.user);
    return sendDataResponse(res, 200, { pages: foundPages });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const getPageById = async (req, res) => {
  console.log('USer by ID req', req.user);
  console.log('req.params', req.params);
  const pageId = Number(req.params.pageId)

  try {
    console.log('test');
    const foundPage = await findPageById(pageId);
    console.log('foundPage', foundPage);
    // If no found pages
    if (!foundPage) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find page by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterPages.emit('get-page-by-id', req.user)
    return sendDataResponse(res, 200, { page: foundPage });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get page by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewPage = async (req, res) => {
  console.log('createNewPage');
  const { type, name, desc, price } = req.body;
  console.log(req.body);
  try {
    if (!type || !name || !desc || !price) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Page creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundPage = await findPageByName(name);
    console.log('found page', foundPage);

    if (foundPage) {
      return sendDataResponse(res, 400, { page: 'Page name already exists' });
    }

    const createdPage = await createPage(type, name, desc, price);
    console.log('created page', createdPage);

    // myEmitterPages.emit('create-page', createdPage);

    return sendDataResponse(res, 201, { createdPage });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new page`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const getPagesFromUser = async (req, res) => {
  console.log('get user id page');
  const userId = req.params.userId;
  console.log('useeId', userId);

  try {
    console.log('test');
    const foundUser = await findUserById(userId);
    console.log('foundUser', foundUser);
    if (!foundUser) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find user by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    const foundPages = await findUserPagesById(userId);
    console.log('foundPages', foundPages);
    // If no found users

    myEmitterPages.emit('get-user-pages', req.user);
    return sendDataResponse(res, 200, { user: foundPages });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user pages by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deletePage = async (req, res) => {
  console.log('deletePage');
  const id = Number(req.params.id);
  console.log(id);

  try {
    const foundPage = await findPageById(id);
    console.log('foundPage', foundPage);

    if (!foundPage) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found page',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deletePageById(id);
    // myEmitterPages.emit('deleted-page', req.user);
    return sendDataResponse(res, 200, {
      page: foundPage,
      message: `Page ${foundPage.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete page`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
