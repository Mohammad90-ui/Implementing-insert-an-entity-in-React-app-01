// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData"
import "./Home.css"; // Import the CSS for styling



const Home = () => {
  const navigate = useNavigate();

  const sampleBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream.",
      coverImage: "https://example.com/gatsby.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism.",
      coverImage: "https://example.com/1984.jpg",
    },
  ];

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button onClick={() => navigate("/add-book")} className="add-book-btn">
        Add Book
      </button>
      <div className="book-list">
        {sampleBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
