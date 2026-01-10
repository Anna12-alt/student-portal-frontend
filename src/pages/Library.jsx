import data from "../data/library.json";
import "./Library.css";
import { useState } from "react";

export default function Library() {
  const [search, setSearch] = useState("");

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Library</h1>
      <h3>Search & Borrow Books</h3>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search by title, author, or subject..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* BOOK LIST */}
      <div className="book-list">
        {filteredBooks.map((book, i) => (
          <div key={i} className="book-card">
            <h2 className="book-title">{book.title}</h2>

            <p className="book-author">
              <strong>Author:</strong> {book.author}
            </p>

            <p className="book-subject">
              <strong>Subject:</strong> {book.subject}
            </p>

            <div
              className={
                book.status === "Available"
                  ? "status available"
                  : "status unavailable"
              }
            >
              {book.status}
            </div>

            <button
              className="borrow-btn"
              disabled={book.status !== "Available"}
            >
              {book.status === "Available" ? "Borrow" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
