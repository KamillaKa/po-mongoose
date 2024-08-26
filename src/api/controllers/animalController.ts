import { NextFunction, Request, Response } from "express";
import { Animal } from "../../types/Animal";
import { MessageResponse } from "../../types/Messages";
import AnimalModel from "../models/animalModel";
import CustomError from "../../classes/CustomError";

type DBMessageResponse = MessageResponse & {
  data: Animal | Animal[];
};

const postAnimal = async (
  req: Request<{}, {}, Animal>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const newAnimal = new AnimalModel(req.body);
    const savedAnimal = await newAnimal.save();

    res.json({ message: "Animal added successfully", data: savedAnimal });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getAnimals = async (
  req: Request,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const animals = await AnimalModel.find().populate('species');
    res.json({ message: "Animals fetched successfully", data: animals });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getAnimal = async (
  req: Request<{ id: string }>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const animal = await AnimalModel.findById(req.params.id).populate('species');

    if (!animal) {
      throw new CustomError("Animal not found", 404);
    }

    res.json({ message: "Animal fetched successfully", data: animal });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const putAnimal = async (
  req: Request<{ id: string }, {}, Animal>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const updatedAnimal = await AnimalModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAnimal) {
      throw new CustomError("Animal not found", 404);
    }

    res.json({ message: "Animal updated successfully", data: updatedAnimal });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const deleteAnimal = async (
  req: Request<{ id: string }>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const deletedAnimal = await AnimalModel.findByIdAndDelete(req.params.id);

    if (!deletedAnimal) {
      throw new CustomError("Animal not found", 404);
    }

    res.json({ message: "Animal deleted successfully", data: deletedAnimal });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export { postAnimal, getAnimals, getAnimal, putAnimal, deleteAnimal };
