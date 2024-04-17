import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearchPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DeleteBook = () => {
  const [bookid, setBookId] = useState("");
  const [bookData, setBookData] = useState(null);
  const [bookDetails, setBookDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDelete = (e) => {
    console.log(e.target.value);
  };

  const handleInput = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/singlebook`,
        { BookId: bookid }
      );

      if (!response.data) {
        setErrorMessage("No book found.");
        setBookDetails(null);
      } else {
        setBookData(response.data);
        setBookDetails(
          <div className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-lg font-bold mb-2">Book Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-semibold">Book ID:</span>
                </p>
                {/* Rest of the book details */}
              </div>
              <div className="text-left">
                {/* Book details */}
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-red-200 inline-flex items-center"
                >
                  <MdDelete className="mr-2" /> Delete
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-5 gap-4">
              <Link to="/option">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200 inline-block">
                  Back
                </button>
              </Link>
            </div>
          </div>
        );
        setErrorMessage(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setBookDetails(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6  bg-white shadow-md rounded-md text-center">
      <h2 className="text-2xl font-bold mb-4">Search a Book</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Book ID:</label>
        <input
          id="bookId"
          type="text"
          value={bookid}
          onChange={(e) => setBookId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Book ID"
        />
      </div>
      <button
        onClick={handleInput}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200 inline-flex items-center"
      >
        <span className="mr-2">Search</span>
        <FaSearchPlus />
      </button>

      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      {bookDetails && <div className="mt-8">{bookDetails}</div>}
    </div>
  );
};

export default DeleteBook;
