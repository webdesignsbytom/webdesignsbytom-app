import dbClient from '../utils/dbClient.js';

export const findAllReviews = () => dbClient.review.findMany({});

export const findReviewByName = (name) =>
  dbClient.review.findFirst({
    where: { name: name },
  });

export const findReviewById = (reviewId) =>
  dbClient.review.findFirst({
    where: { id: reviewId },
  });

export const findUserReviewsById = (userId) =>
  dbClient.review.findMany({
    where: { userId: userId },
  });

export const createReview = (email, userId, value, content) =>
  dbClient.review.create({
    data: {
      email: email,
      userId: userId,
      value: value,
      content: content,
    },
  });

export const deleteReviewById = (reviewId) =>
  dbClient.review.delete({
    where: {
      id: reviewId,
    },
  });
