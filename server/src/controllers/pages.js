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
  BadRequestEvent,
} from '../event/utils/errorUtils.js';

export const getAllPages = async (req, res) => {
  console.log('get all pages');
  try {
    const foundPages = await findAllPages();

    if (!foundPages) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found pages',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
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
  console.log('GetPageById');
  const pageId = req.params.pageId

  try {
    const foundPage = await findPageById(pageId);
    if (!foundPage) {
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

    if (!createdPage) {
      const notCreated = new BadRequestEvent(
        req.user,
        'Bad Request',
        'Cant create page'
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

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

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find user by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundPages = await findUserPagesById(userId);
    if (!foundPages) {
      const badRequest = new BadRequestEvent(
        req.user,
        'Bad Request',
        'Cant update notification to viewed'
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    myEmitterPages.emit('get-user-pages', req.user);
    return sendDataResponse(res, 200, { user: foundPages });
  } catch (err) {
    // Error
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
  console.log('deletePage')
  const pageId = req.params.pageId

  try {
    const foundPage = await findPageById(pageId);

    if (!foundPage) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found Event',
        'Pages database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deletePageById(id);
    // myEmitterPages.emit('deleted-page', req.user);
    return sendDataResponse(res, 200, {
      page: foundPage,
      message: `Page ${foundPage.name} deleted`,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Delete page`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
