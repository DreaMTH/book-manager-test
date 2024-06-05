import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  publishDate: {
    type: Date,
  },
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
});

export const BookModel =
  mongoose.models.Book || mongoose.model("Book", BookSchema);
