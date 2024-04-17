import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import { FaSearchPlus } from "react-icons/fa";

const SerachBook = () => {
  const [bookid, setBookId] = useState("");
  const [bookData, setBookData] = useState(null);
  const [bookDetails, setBookDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // Add state for error message

  const handleCreateBookIssue = async () => {
   
  };

  const handleInput = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/singlebook`,
        { BookId: bookid }
      );

      if (!response.data) {
        setErrorMessage('No book found.');
        setBookDetails(null); // Clear book details
      } else {
        // If book data found, set book details
        setBookData(response.data);
        setBookDetails(
          <div className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-lg font-bold mb-2">Book Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p><span className="font-semibold">Book ID:</span></p>
                <p><span className="font-semibold">Book Title:</span></p>
                <p><span className="font-semibold">Author Name:</span></p>
                <p><span className="font-semibold">Edition:</span></p>
                <p><span className="font-semibold">Pages:</span></p>
                <p><span className="font-semibold">Cost:</span></p>
                <p><span className="font-semibold">Name of Supplier:</span></p>
                <p><span className="font-semibold">No. of Books:</span></p>
              </div>
              <div className="text-left">
                <p>{response.data.Book_ID}</p>
                <p>{response.data.Book_Title}</p>
                <p>{response.data.Author_Name}</p>
                <p>{response.data.Edition}</p>
                <p>{response.data.pages}</p>
                <p>{response.data.Cost}</p>
                <p>{response.data.Name_Of_Supplier}</p>
                <p>{response.data.No_Of_Books}</p>
              </div>
            </div>
            <div className="flex justify-center mt-5 gap-4">
              <Link to="/option">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200 inline-block">
                  Back
                </button>
              </Link>
              {response.data && response.data.No_Of_Books > 0 && (
                <button onClick={handleCreateBookIssue} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200">
                  Issue Book
                </button>
              )}
            </div>
          </div>
        );
        setErrorMessage(null); // Clear error message if book found
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage('An error occurred. Please try again later.');
      setBookDetails(null); // Clear book details
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
      <button onClick={handleInput} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200 inline-flex items-center">
  <span className="mr-2">Search</span>
  <FaSearchPlus/>
</button>

      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      {bookDetails && <div className="mt-8">{bookDetails}</div>}
    </div>
  );
}

export default SerachBook;
