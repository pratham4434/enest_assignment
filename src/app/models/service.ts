import mongoose, { Schema, model, models } from "mongoose";

const service = new Schema({
  name: { type: String, required: true },
  feature1: { type: String, required: true },
  feature2: { type: String, required: true },
  feature3: { type: String, required: true },
 
});

const Service = models.Service || model("Service", service);

export default Service;
