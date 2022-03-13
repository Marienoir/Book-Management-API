import express from 'express';
import bookRoute from './bookRouter';
import userRoute from './userRouter';

const router = express.Router();

router.use('/api/v1/books', bookRoute);
router.use('/api/v1/users', userRoute);

export default router;
