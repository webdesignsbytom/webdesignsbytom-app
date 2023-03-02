// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterProjects } from '../event/projectEvents.js';
import {
  findAllProjects,
  findProjectByName,
  createProject,
  findProjectById,
  deleteProjectById,
} from '../domain/projects.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllProjects = async (req, res) => {
  console.log('get all projects');
  try {
    // Find all projects
    const foundProjects = await findAllProjects();

    // If no found projects
    if (!foundProjects) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found projects',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterProjects.emit('get-all-projects', req.user);
    return sendDataResponse(res, 200, { projects: foundProjects });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewProject = async (req, res) => {
  console.log('createNewProject');
  const { type, name, userId, domainName } = req.body;
  console.log(req.body);
  try {
    if (!type || !name || !userId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Project creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
console.log('XXXX')

    const foundUser = await findUserById(userId)
    console.log('found user', foundUser)

    const createdProject = await createProject(type, name, userId, domainName)
    console.log('created project', createdProject)
  
    // myEmitterProjects.emit('create-project', createdProject);

    return sendDataResponse(res, 201, { createdProject });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new project`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteProject = async (req, res) => {
  console.log('deleteProject');
  const id = Number(req.params.id);
  console.log(id);

  try {
    const foundProject = await findProjectById(id);
    console.log('foundProject', foundProject);

    if (!foundProject) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found project',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
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
