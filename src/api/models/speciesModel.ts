import mongoose from "mongoose";
import { Species } from "../../types/Species";

const speciesSchema = new mongoose.Schema<Species>({
  species_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
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

export default mongoose.model<Species>("Species", speciesSchema);

