import { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { firebase } from "../firebase";
import { BookListItem } from "./BookListItem";
import { Book } from "../firebase/types";

export const BookList = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(firebase, "books");
        const booksQuery = query(booksCollection);
        const snapshot = await getDocs(booksQuery);

        const booksData = snapshot.docs.map((doc) => doc.data() as Book);

        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map(({ id, title, author, publishedYear }) => (
        <BookListItem
          key={id}
          title={title}
          author={author}
          publishedYear={publishedYear}
        />
      ))}
    </div>
  );
};
