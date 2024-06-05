import { body } from "express-validator";

export const bookValidator = [
  body("title", "Bad title").isString(),
  body("pageCount", "Bad Page Count").isNumeric(),
  body("publishDate", "Bad publish date").isString(),
  body("shortDescription", "Bad short description").isString(),
  body("longDescription", "Bad long description").isString(),
  body("status", "Bad status").isString(),
  body("thumbnailUrl", "bad thumbnailUrl").isURL(),
  body("authors", "Bad authors").isArray(),
];
