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
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllReviews);
router.get('/user-reviews/:userId', getReviewsFromUser);
router.get('/:reviewId', getReviewById);
router.post('/create', createNewReview);
router.delete('/delete/:id', deleteReview);

export default router;
