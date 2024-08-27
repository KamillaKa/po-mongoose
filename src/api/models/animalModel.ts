import { Schema, model } from "mongoose";
import { Animal } from "../../types/Animal";

const animalSchema = new Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  birthdate: {
    type: Date,
    required: true,
    max: Date.now(),
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export default model<Animal>("Animal", animalSchema);
