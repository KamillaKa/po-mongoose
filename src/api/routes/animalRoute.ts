import express from 'express';
import { deleteAnimal, getAnimal, postAnimal, putAnimal } from '../controllers/animalController';

const router = express.Router();

router.route('/').post((postAnimal));

router.route('/:id').get(getAnimal).put(putAnimal).delete(deleteAnimal);

export default router;
