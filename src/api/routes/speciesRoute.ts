import express from 'express';
import { deleteSpecies, getSpecies, postSpecies, putSpecies } from '../controllers/speciesController';

const router = express.Router();

router.route('/').post((postSpecies));

router.route('/:id').get(getSpecies).put(putSpecies).delete(deleteSpecies);

export default router;
