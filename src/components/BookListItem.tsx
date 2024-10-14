import { Book } from "../firebase/types";
import "./style.css";

export const BookListItem = ({
  title,
  author,
  publishedYear,
}: Omit<Book, "id">) => (
  <div className="book-list-item">
    <div className="book-info">
      <div className="book-title">{title}</div>
      <div className="book-author">{author}</div>
      <div className="book-year">Published Year: {publishedYear}</div>
    </div>
  </div>
);
