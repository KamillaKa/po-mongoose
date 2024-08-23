import { Point } from "geojson";
import mongoose from "mongoose";

type Animal = {
  animal_name: string;
  birthdate: Date;
  species: mongoose.Types.ObjectId;
  location: Point;
}

export { Animal };
