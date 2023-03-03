// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterReviews } from '../event/reviewEvents.js';
import {
  findAllReviews,
  createReview,
  findReviewById,
  deleteReviewById,
  findUserReviewsById,
} from '../domain/reviews.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllReviews = async (req, res) => {
  console.log('get all reviews');
  try {
    // Find all reviews
    const foundReviews = await findAllReviews();

    // If no found reviews
    if (!foundReviews) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found reviews',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterReviews.emit('get-all-reviews', req.user);
    return sendDataResponse(res, 200, { reviews: foundReviews });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getReviewById = async (req, res) => {
  console.log('USer by ID req', req.user);
  console.log('req.params', req.params);
  const reviewId = Number(req.params.reviewId)

  try {
    console.log('test');
    const foundReview = await findReviewById(reviewId);
    console.log('foundReview', foundReview);
    // If no found reviews
    if (!foundReview) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find review by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterReviews.emit('get-review-by-id', req.user)
    return sendDataResponse(res, 200, { review: foundReview });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get review by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getReviewsFromUser = async (req, res) => {
  console.log('get user id review');
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
    const foundReviews = await findUserReviewsById(userId);
    console.log('foundReviews', foundReviews);
    // If no found users

    myEmitterReviews.emit('get-user-reviews', req.user);
    return sendDataResponse(res, 200, { user: foundReviews });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user reviews by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewReview = async (req, res) => {
  console.log('createNewReview');
  const { email, userId, content } = req.body;
  console.log(req.body);
  try {
    if (!content) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Review creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    console.log('XXXX');

    const foundUser = await findUserById(userId);
    console.log('found user', foundUser);

    const createdReview = await createReview(email, userId, content);
    console.log('created review', createdReview);

    // myEmitterReviews.emit('create-review', createdReview);

    return sendDataResponse(res, 201, { createdReview });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new review`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteReview = async (req, res) => {
  console.log('deleteReview');
  const id = Number(req.params.id);
  console.log(id);

  try {
    const foundReview = await findReviewById(id);
    console.log('foundReview', foundReview);

    if (!foundReview) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found review',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteReviewById(id);
    myEmitterReviews.emit('deleted-review', req.user);
    return sendDataResponse(res, 200, {
      review: foundReview,
      message: `Review ${foundReview.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete review`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
