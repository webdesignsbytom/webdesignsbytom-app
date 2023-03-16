// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterProjects } from '../event/projectEvents.js';
import {
  findAllProjects,
  findProjectByName,
  createProject,
  findProjectById,
  deleteProjectById,
  findUserProjectsById,
} from '../domain/projects.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  BadRequestEvent,
} from '../event/utils/errorUtils.js';

export const getAllProjects = async (req, res) => {
  console.log('get all projects');
  try {
    const foundProjects = await findAllProjects();

    if (!foundProjects) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Project database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterProjects.emit('get-all-projects', req.user);
    return sendDataResponse(res, 200, { projects: foundProjects });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getProjectById = async (req, res) => {
console.log('getprojectById')
  const projectId = req.params.projectId

  try {
    const foundProject = await findProjectById(projectId);
    if (!foundProject) {
      const notFound = new NotFoundEvent(
        req.user,
        'not found',
        'Cant find project by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterProjects.emit('get-project-by-id', req.user)
    return sendDataResponse(res, 200, { project: foundProject });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get project by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getProjectsFromUser = async (req, res) => {
  console.log('get user id project');
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

    const foundProjects = await findUserProjectsById(userId);
    console.log('foundProjects', foundProjects);

    if (!foundProjects) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Projects database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterProjects.emit('get-user-projects', req.user);
    return sendDataResponse(res, 200, { user: foundProjects });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user projects by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewProject = async (req, res) => {
  console.log('createNewProject');
  const { type, name, userId, domainName } = req.body;

  try {
    if (!type || !name || !userId) {
      const missingField = new MissingFieldEvent(
        null,
        'Project creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundProject = await findProjectByName(name);

    if (foundProject) {
      return sendDataResponse(res, 400, { project: 'Project name already exists' });
    }

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'User not found'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdProject = await createProject(type, name, userId, domainName);

    if (!createdProject) {
      const badRequest = new BadRequestEvent(
        req.user,
        'Bad request',
        'Project database'
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    // myEmitterProjects.emit('create-project', createdProject);
    return sendDataResponse(res, 201, { createdProject });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create new project`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteProject = async (req, res) => {
  console.log('deleteProject');
  const projectId = req.params.projectId

  try {
    const foundProject = await findProjectById(projectId);

    if (!foundProject) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found project',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteProjectById(id);
    myEmitterProjects.emit('deleted-project', req.user);
    return sendDataResponse(res, 200, {
      project: foundProject,
      message: `Project ${foundProject.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete project`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
