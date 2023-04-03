import { Router } from 'express';
import {
  getAllReviews,
  createNewReview,
  deleteReview,
  getReviewsFromUser,
  getReviewById,
} from '../controllers/reviews.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllReviews);
router.get('/user-reviews/:userId', getReviewsFromUser);
router.get(
  '/:reviewId',
  validateAuthentication,
  validateAdminRole,
  getReviewById
);
router.post('/create', createNewReview);
router.delete(
  '/delete/:reviewId',
  validateAuthentication,
  validateAdminRole,
  deleteReview
);

export default router;
