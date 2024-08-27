import express from 'express';
import { deleteSpecies, getSpecies, getSpeciesById, postSpecies, putSpecies } from '../controllers/speciesController';
import { addImageToSpecies } from '../../middlewares';

const router = express.Router();

router.route('/').post(addImageToSpecies, postSpecies).get(getSpecies);

router.route('/:id').get(getSpeciesById).put(putSpecies).delete(deleteSpecies);

export default router;
