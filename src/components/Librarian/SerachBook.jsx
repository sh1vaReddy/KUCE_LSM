import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearchPlus } from "react-icons/fa";
import addbooks from  '../../assets/Bookserach.jpeg'

const BookHistory = () => {
  const [bookid, setBookId] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInput = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/book", { BookId: bookid });

      if (!response.data) {
        setErrorMessage('No book found.');
        setBookDetails(null);
      } else {
        const book = response.data.book;
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
                <p><span className="font-semibold">Status:</span></p>
                <p><span className="font-semibold">Name of Supplier:</span></p>
                <p><span className="font-semibold">No. of Books:</span></p>
              </div>
              <div className="text-left">
                <p>{book.Book_ID}</p>
                <p>{book.Book_Title}</p>
                <p>{book.Author_Name}</p>
                <p>{book.Edition}</p>
                <p>{book.pages}</p>
                <p>{book.Cost}</p>
                <p className={book.Status === 'Available' ? 'text-green-600' : 'text-red-600'}>{book.Status}</p>
                <p>{book.Name_Of_Supplier}</p>
                <p>{book.No_Of_Books}</p>
              </div>
            </div>
            <div className="flex justify-center mt-5 gap-4">
              <Link to="/libran">
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
      setErrorMessage('An error occurred. Please try again later.');
      setBookDetails(null);
    }
  };

  return (
  
       <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${addbooks})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter:`blur(8px)`
      }}
    />
    <div className="max-w-md mx-auto  p-6  bg-white shadow-md rounded-md text-center backdrop-filter backdrop-blur-sm bg-opacity-10">
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
    </div>
   
  );
}

export default BookHistory;
