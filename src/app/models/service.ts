import { Schema, model, models } from 'mongoose';

const serviceSchema = new Schema({
  name: { type: String, required: true },
  feature1: { type: String, required: true },
  feature2: { type: String, required: true },
  feature3: { type: String, required: true },
  feature4: { type: String, required: true },
  feature5: { type: String, required: true },
  feature6: { type: String, required: true },
  fee: { type: Number, required: true },
  planId: { type: String, required: true },
  reviews: [
    {
      name: { type: String, required: [true, "Name is required"] },
      content: { type: String, required: [true, "Review content is required"] },
    }
  ], 
});

const Service = models.Service || model('Service', serviceSchema);

export default Service;
