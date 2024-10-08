import { Schema, model, models } from "mongoose";

const universitySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  ranking: { type: Number },
  students: { type: Number },
  established: { type: Number },
  imageUrl: { type: String },

});

const University = models.University || model("University", universitySchema);

export default University;
