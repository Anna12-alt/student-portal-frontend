import { useState } from "react";
import libraryData from "../data/library.json";
import "./Library.css";

export default function Library() {
  const [books, setBooks] = useState(libraryData.books);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null); // book user is borrowing
  const [showModal, setShowModal] = useState(false);

  // Auto generate borrow dates
  const today = new Date();
  const borrowDate = today.toLocaleDateString("en-GB");
  const returnDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB");

  const handleBorrowClick = (book) => {
    if (book.status !== "Available") return; // cannot borrow checked out
    setSelectedBook(book);
    setShowModal(true);
  };

  const confirmBorrow = () => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === selectedBook.id
          ? { ...b, status: "Borrowed" }
          : b
      )
    );

    setShowModal(false);
    setSelectedBook(null);
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase()) ||
    b.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Library</h1>
      <p>Search & Borrow Books</p>

      <input
        className="search-input"
        placeholder="Search by title, author, or subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="library-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h2 className="book-title">{book.title}</h2>

            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Subject:</strong> {book.subject}</p>

            {/* badge */}
            <span
              className={`badge ${book.status === "Available"
                  ? "available"
                  : book.status === "Borrowed"
                    ? "borrowed"
                    : "checkedout"
                }`}
            >
              {book.status}
            </span>

            {/* button */}
            {book.status === "Available" ? (
              <button className="borrow-btn" onClick={() => handleBorrowClick(book)}>
                Borrow
              </button>
            ) : (
              <button className="disabled-btn" disabled>
                {book.status === "Borrowed" ? "Borrowed ✓" : "Unavailable"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* ===== POPUP MODAL ===== */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Borrow Book</h2>

            <p><strong>Book:</strong> {selectedBook.title}</p>
            <p><strong>Borrow Date:</strong> {borrowDate}</p>
            <p><strong>Return Date:</strong> {returnDate} (7 days)</p>

            <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
              <em>Your request will be reviewed by the librarian.</em>
            </p>

            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmBorrow}>
                Confirm Borrow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




