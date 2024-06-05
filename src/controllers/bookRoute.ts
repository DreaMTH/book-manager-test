import express, { Request, Response } from "express";
import { BookService } from "../sevices/bookService";
import { bookValidator } from "../validators/postValidator";
import handleValidationErrors from "../validators/handleValidationErrors";
import { BookDto } from "../dto/bookDto";

const bookService: BookService = new BookService();
export const bookRouter = express.Router();

bookRouter.get("/", async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
bookRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
bookRouter.post(
  "/new",
  bookValidator,
  handleValidationErrors,
  async (req: Request, res: Response) => {
    try {
      const {
        title,
        pageCount,
        publishDate,
        shortDescription,
        longDescription,
        status,
        authors,
        thumbnailUrl,
      } = await req.body;
      const book: BookDto = {
        title,
        pageCount,
        publishDate,
        shortDescription,
        longDescription,
        thumbnailUrl,
        status,
        authors,
      };
      const doc = await bookService.postBook(book);
      return res.status(200).json(doc);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
);
bookRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const { update } = await req.body;
    const book = await bookService.updateBook(req.params.id, update);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
bookRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const doc = await bookService.deleteBook(req.params.id);
    return res.status(200).json(doc);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
