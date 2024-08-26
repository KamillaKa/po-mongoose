import mongoose from "mongoose";
import { Animal } from "../../types/Animal";

const animalSchema = new mongoose.Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  birthdate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value: Date) {
        return value <= new Date();
      },
      message: "Birthdate cannot be in the future.",
    },
  },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Species",
    required: true,
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
      validate: {
        validator: function (value: number[]) {
          return value.length === 2;
        },
        message: "Coordinates must contain exactly two numbers.",
      },
    },
  },
});

export default mongoose.model<Animal>("Animal", animalSchema);
