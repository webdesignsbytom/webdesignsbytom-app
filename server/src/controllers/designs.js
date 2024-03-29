// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterDesigns } from '../event/designEvents.js';
import {
  findAllDesigns,
  findDesignByName,
  createDesign,
  findDesignById,
  deleteDesignById,
  findUserDesignsById,
  checkFileDoesntExist,
  createNewUserStory,
  createEmptyNav,
  createEmptyStories,
} from '../domain/designs.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  BadRequestEvent,
  NoPermissionEvent,
} from '../event/utils/errorUtils.js';
import { EVENT_MESSAGES } from '../utils/responses.js';
import { createEmptyPalette } from '../domain/palettes.js';
export const getAllDesigns = async (req, res) => {
  console.log('get all designs');
  try {
    const foundDesigns = await findAllDesigns();

    if (!foundDesigns) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Designs database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterDesigns.emit('get-all-designs', req.user);
    return sendDataResponse(res, 200, { designs: foundDesigns });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all designs`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getDesignById = async (req, res) => {
  console.log('DesignById');
  const designId = req.params.designId;

  try {
    const foundDesign = await findDesignById(designId);

    if (!foundDesign) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Cant find design by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterDesigns.emit('get-design-by-id', req.user)
    return sendDataResponse(res, 200, { design: foundDesign });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get design by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getDesignsFromUser = async (req, res) => {
  console.log('get user id design');
  const userId = req.params.userId;

  try {
    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundDesigns = await findUserDesignsById(userId);

    // myEmitterDesigns.emit('get-user-designs', req.user);
    return sendDataResponse(res, 200, { designs: foundDesigns });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user designs by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewDesign = async (req, res) => {
  console.log('createNewDesign');
  const { name, navDesign, colourPalette, userStories, userId } = req.body;
  console.log('name', name, navDesign, colourPalette, userStories, userId);

  try {
    if (!req.body) {
      const missingField = new MissingFieldEvent(
        null,
        'Design creation: Missing request body'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    console.log('AAAA');
    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Cant find user, design create'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    console.log('ttt');
    const createdDesign = await createDesign(
      name,
      navDesign,
      colourPalette,
      userStories,
      userId
    );
    console.log('created', createdDesign);

    if (!createdDesign) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Cant create design for user'
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    const allDesigns = await findUserDesignsById(userId)

    // myEmitterDesigns.emit('create-design', createdDesign);
    return sendDataResponse(res, 201, { createdDesign, allDesigns });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new design`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const saveDesign = async (req, res) => {
  console.log('SAVE', req.body);
  const { id, name, userId, userStories, navDesign, colourPalette } = req.body;
  console.log(id);
  console.log(name);


  try {

    if (id === undefined) {
      console.log('LLLLLLLL')
      const newDesign = await createNewDesign()
    }
    const foundDesign = await findDesignById(id);

    if (foundDesign) {
      console.log('found', foundDesign);
      userStories.forEach((story) => {
        if (!story.designId) {
          console.log('XXX', story);
          story.designId = id;
        }
        foundDesign.userStories.forEach(async (existingStory) => {
          if (story.content !== existingStory.content) {
            const newStory = await createNewUserStory(story);
            console.log('new', newStory);
          }
        });
      });
    } else {
      userStories.forEach((story) => {
        if (!story.designId) {
          console.log('XXX', story);
          story.designId = id;
        }
      });
    }

    console.log('user2 ', userStories);
    return sendDataResponse(res, 200, { design: foundDesign });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Save design`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
  // try {
  //   const foundDesign = await findDesignById(id);
  //   console.log('foundDesign: ', foundDesign);
  //   if (!foundDesign) {
  //     const notFound = new NotFoundEvent(
  //       req.user,
  //       EVENT_MESSAGES.notFound,
  //       EVENT_MESSAGES.designNotFound
  //     );
  //     myEmitterErrors.emit('error', notFound);
  //     return sendMessageResponse(res, notFound.code, notFound.message);
  //   }

  //   if (userStories) {
  //     console.log('AAAA');
  //     userStories.forEach((story) => {
  //       console.log('story: ', story);
  //       console.log('foundDesign.userStories', foundDesign);
  //       if (foundDesign.userStories) {
  //         foundDesign.userStories.forEach(async (design) => {
  //           if (design.content !== story.content) {
  //             const newStory = await createNewUserStory(story);
  //             console.log('newStory: ', newStory);
  //           } else {
  //             const invalid = new BadRequestEvent(
  //               req.user,
  //               EVENT_MESSAGES.designTag,
  //               'User story already exists'
  //             );
  //             myEmitterErrors.emit('error', invalid);
  //             return sendMessageResponse(res, invalid.code, invalid.message);
  //           }
  //         });
  //       } else {
  //         userStories.forEach(async (story) => {
  //           console.log('new story: ', story);
  //           const newStory = await createNewUserStory(story);
  //           console.log('SS new story: ', newStory);
  //         });
  //       }
  //     });
  //   }

  //   // myEmitterDesigns.emit('get-design-by-id', req.user)
  //   return sendDataResponse(res, 200, { design: foundDesign });
  // } catch (err) {
  //   //
  //   const serverError = new ServerErrorEvent(req.user, `Get design by ID`);
  //   myEmitterErrors.emit('error', serverError);
  //   sendMessageResponse(res, serverError.code, serverError.message);
  //   throw err;
  // }
};

export const deleteDesign = async (req, res) => {
  console.log('deleteDesign');
  const designId = req.params.designId;
  const userId = req.params.userId;

  try {
    const foundDesign = await findDesignById(designId);

    if (!foundDesign) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found design',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (userId !== foundDesign.userId) {
      const notAuthorised = new NoPermissionEvent(
        req.user,
        'Id does not match userId on design',
        'Event database'
      );
      myEmitterErrors.emit('error', notAuthorised);
      return sendMessageResponse(res, notAuthorised.code, notAuthorised.message);
    }

    await deleteDesignById(designId);
    // myEmitterDesigns.emit('deleted-design', req.user);
    const newDesigns = await findUserDesignsById(userId)

    return sendDataResponse(res, 200, {
      design: foundDesign,
      newDesigns: newDesigns,
      message: `Design ${foundDesign.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete design`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
