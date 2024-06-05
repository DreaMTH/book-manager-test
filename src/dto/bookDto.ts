import { Date } from "mongoose";

export declare type BookDto = {
  title: string;
  pageCount: number;
  publishDate: Date;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
};
export declare type BookUpdateDto = {
  title?: string;
  pageCount?: number;
  publishDate?: Date;
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  status?: string;
  authors?: string[];
};
