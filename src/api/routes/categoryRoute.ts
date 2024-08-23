import express from 'express';
import { deleteCategory, getCategory, postCategory, putCategory } from '../controllers/categoryController';

const router = express.Router();

router.route('/').post((postCategory));

router.route('/:id').get(getCategory).put(putCategory).delete(deleteCategory);

export default router;
