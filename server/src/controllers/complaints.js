// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterComplaints } from '../event/complaintEvents.js';
import {
  findAllComplaints,
  createComplaint,
  findComplaintById,
  deleteComplaintById,
  findUserComplaintsById,
  updateComplaintToViewed
} from '../domain/complaints.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllComplaints = async (req, res) => {
  console.log('get all complaints');
  try {
    // Find all complaints
    const foundComplaints = await findAllComplaints();

    // If no found complaints
    if (!foundComplaints) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found complaints',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-all-complaints', req.user);
    return sendDataResponse(res, 200, { complaints: foundComplaints });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getComplaintById = async (req, res) => {
  console.log('USer by ID req', req.user);
  console.log('req.params', req.params);
  const complaintId = Number(req.params.complaintId)

  try {
    console.log('test');
    const foundComplaint = await findComplaintById(complaintId);
    console.log('foundComplaint', foundComplaint);
    // If no found complaints
    if (!foundComplaint) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find complaint by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-complaint-by-id', req.user)
    return sendDataResponse(res, 200, { complaint: foundComplaint });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get complaint by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getComplaintsFromUser = async (req, res) => {
  console.log('get user id complaint');
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
    const foundComplaints = await findUserComplaintsById(userId);
    console.log('foundComplaints', foundComplaints);
    // If no found users

    myEmitterComplaints.emit('get-user-complaints', req.user);
    return sendDataResponse(res, 200, { user: foundComplaints });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user complaints by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewComplaint = async (req, res) => {
  console.log('createNewComplaint');
  const { email, userId, content } = req.body;
  console.log(req.body);
  try {
    if (!content) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Complaint creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    console.log('XXXX');

    const foundUser = await findUserById(userId);
    console.log('found user', foundUser);

    const createdComplaint = await createComplaint(email, userId, content);
    console.log('created complaint', createdComplaint);

    // myEmitterComplaints.emit('create-complaint', createdComplaint);

    return sendDataResponse(res, 201, { createdComplaint });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new complaint`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const setComplaintToViewed = async (req, res) => {
  console.log('setComplaintToView');
  const complaintId = req.params.complaintId
  console.log('complaintId', complaintId);

  try {
    const foundComplaint = await findComplaintById(complaintId);
    console.log('foundComplaint', foundComplaint);
    // If no found complaints
    if (!foundComplaint) {
      // Create error instance
      const notFound = new NotFoundEvent(
        'Not found event',
        'Cant find complaint by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedComplaint = await updateComplaintToViewed(complaintId);
    console.log('updated complaint', updatedComplaint);

    // myEmitterComplaints.emit('viewed-complaint', req.complaint);
    return sendDataResponse(res, 200, { complaint: updatedComplaint });
  } catch (err) {
    // Create error instance
    const serverError = new ServerErrorEvent(
      `Viewed Complaint Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteComplaint = async (req, res) => {
  console.log('deleteComplaint');
  const id = Number(req.params.id);
  console.log(id);

  try {
    const foundComplaint = await findComplaintById(id);
    console.log('foundComplaint', foundComplaint);

    if (!foundComplaint) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found complaint',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteComplaintById(id);
    myEmitterComplaints.emit('deleted-complaint', req.user);
    return sendDataResponse(res, 200, {
      complaint: foundComplaint,
      message: `Complaint ${foundComplaint.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete complaint`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
