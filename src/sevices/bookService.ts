import { BookDto, BookUpdateDto } from "../dto/bookDto";
import { BookModel } from "../models/BookModel";
import { isValidObjectId } from "mongoose";
export class BookService {
  async getAllBooks() {
    try {
      const books = await BookModel.find();
      if (!books) {
        return { message: "No books." };
      }
      return books;
    } catch (error) {
      console.error(error);
      return { message: "Error" };
    }
  }
  async getBookById(id: string) {
    try {
      if (!isValidObjectId(id)) {
        return { message: "Invalid object id" };
      }
      const book = await BookModel.findById(id);
      if (!book) {
        return {
          message: "No book",
        };
      }
      return book;
    } catch (err) {
      console.log(err);
      return { message: "Error" };
    }
  }
  async postBook(book: BookDto) {
    try {
      const doc = new BookModel(book);
      await doc.save();
      return doc;
    } catch (err: any) {
      console.error(err);
      if (err.code === 11000) {
        return { message: "attempt to post a duplicate item" };
      }
      return { message: "Error" };
    }
  }
  async deleteBook(id: string) {
    try {
      if (!isValidObjectId(id)) {
        return {
          message: "Invalid object id",
        };
      }
      const deleted = await BookModel.findByIdAndDelete(id);
      return deleted;
    } catch (err) {
      console.error(err);
      return {
        message: "Error",
      };
    }
  }
  async updateBook(id: string, updateQuery: BookUpdateDto) {
    try {
      if (!isValidObjectId(id)) {
        return {
          message: "Invalid object id",
        };
      }
      const doc = await BookModel.findOneAndUpdate({ _id: id }, updateQuery, {
        new: true,
      });
      return doc;
    } catch (error) {
      console.error(error);
      return {
        message: "Error",
      };
    }
  }
}
