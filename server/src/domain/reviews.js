import dbClient from '../utils/dbClient.js';

export const findAllReviews = () => dbClient.review.findMany({});

export const findReviewByName = (name) =>
  dbClient.review.findFirst({
    where: { name: name },
  });

export const findReviewById = (id) =>
  dbClient.review.findFirst({
    where: { id: id },
  });

export const findUserReviewsById = (id) =>
  dbClient.review.findMany({
    where: { userId: id },
  });

export const createReview = (email, userId, content) =>
  dbClient.review.create({
    data: {
      email: email,
      userId: userId,
      content: content
    },
  });

export const deleteReviewById = (id) =>
  dbClient.review.delete({
    where: {
      id: id,
    },
  });
