export interface BookType {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  category: string;
  tags: string[];
  totalPages: number;
  rating: number;
  yearOfPublishing: number;
  publisher: string;
}