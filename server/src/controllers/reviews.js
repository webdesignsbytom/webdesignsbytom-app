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
  BadRequestEvent,
} from '../event/utils/errorUtils.js';
import { EVENT_MESSAGES } from '../utils/responses.js';

export const getAllReviews = async (req, res) => {
  console.log('get all reviews');
  try {
    const foundReviews = await findAllReviews();
    if (!foundReviews) {
      const notFound = new NotFoundEvent(
        // User
        req.user,
        // Topic
        EVENT_MESSAGES.notFoundReview,
        // Target
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterReviews.emit('get-all-reviews', req.user);
    return sendDataResponse(res, 200, { reviews: foundReviews });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getReviewById = async (req, res) => {
  console.log('getReviewById')
  const reviewId = req.params.reviewId

  try {
    const foundReview = await findReviewById(reviewId);
    if (!foundReview) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
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

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        'Cant find user by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    const foundReviews = await findUserReviewsById(userId);
    if (!foundReviews) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant user reviews'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    myEmitterReviews.emit('get-user-reviews', req.user);
    return sendDataResponse(res, 200, { user: foundReviews });
  } catch (err) {
    // Error
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
  const { email, userId, value, content } = req.body;
  try {
    if (!content || !value) {
      const missingField = new MissingFieldEvent(
        null,
        'Review creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserById(userId);

    const createdReview = await createReview(email, userId, value, content);
    if (!createdReview) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createReviewFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

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
  const reviewId = req.params.reviewId

  try {
    const foundReview = await findReviewById(reviewId);
    if (!foundReview) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFoundReview,
        'Review database'
      );
      myEmitterErrors.emit('error', notFound);
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
