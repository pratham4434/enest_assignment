import mongoose, { Schema, model, models } from "mongoose";

const service = new Schema({
  name: { type: String, required: true },
  fee: { type: Number, required: true },
  feature1: { type: String, required: true },
  feature2: { type: String, required: true },
  feature3: { type: String, required: true },
  feature4: { type: String, required: true },
  feature5: { type: String, required: true },
  feature6: { type: String, required: true },
 
});

const Service = models.Service || model("Service", service);

export default Service;
