import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllReviewsEvent,
  createCreateReviewEvent,
  createDeleteReviewEvent,
  createGetUserReviewEvent,
  createGetReviewByIdEvent,
} from './utils/reviewUtils.js';

export const myEmitterReviews = myEmitter;

myEmitterReviews.on('get-all-reviews', async (user) =>
  createGetAllReviewsEvent(user)
);

myEmitterReviews.on('create-review', async (user) =>
  createCreateReviewEvent(user)
);

myEmitterReviews.on('deleted-review', async (user) =>
  createDeleteReviewEvent(user)
);

myEmitterReviews.on('get-review-by-id', async (user) =>
  createGetReviewByIdEvent(user)
);

myEmitterReviews.on('get-user-reviews', async (user) =>
  createGetUserReviewEvent(user)
);
