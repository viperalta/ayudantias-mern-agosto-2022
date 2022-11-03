const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "El rating es obligatorio"],
  },
  content: {
    type: String,
    required: [true, "El contenido de la reseña es obligatorio"],
  },
  creatorName: {
    type: String,
    required: [true, "El nombre del creador de la reseña es obligatorio"],
  },
});

const Review = mongoose.model("Review",ReviewSchema);

module.exports = {ReviewSchema,Review};
