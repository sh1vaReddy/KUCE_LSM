import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Issue from '../../assets/Book Issue.jpeg';


const BookIssue = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');
  const [bookDetails, setBookDetails] = useState(null);

  const { newstudent } = useSelector((state) => state.auth);
  const Roll_NO = newstudent.student.Roll_NO;

  const handleSerachBook = async () => {
    try {
      const response = await axios.post("https://uce-lms-backend.onrender.com/api/v1/book", { BookId: bookId });
      if (response.data.success) {
        setBookDetails(response.data.book);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage('Failed to fetch book details');
    }
  };

  const handleCreateBookIssue = async () => {
    try {
      const response = await axios.post('https://uce-lms-backend.onrender.com/api/v1/bookissue', { BookId: bookId, Roll_No: Roll_NO });
      console.log('Response:', response);
      if (response.data.success) {
        setMessage(response.data.message);
        setBookId("");
      } else {
        setMessage(response.data.message || 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating book issue:', error);
      setMessage('Failed to issue book');
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
        backgroundImage: `url(${Issue})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <div className="flex justify-center items-center h-screen " >
      <div className="max-w-lg p-6 shadow-md rounded-md backdrop-filter backdrop-blur-md bg-opacity-10" style={{ backgroundColor: 'rgba(244, 241, 235, 0.7)' }}>
        <h2 className="text-xl font-bold mb-4">Create Book Issue</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="bookId">Book ID:</label>
          <input
            id="bookId"
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Book ID"
          />
        </div>
        <div className='flex justify-center'>
          <button
            onClick={handleSerachBook}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
          > Search</button>
        </div>

        {bookDetails && (
         <div className="bg-gray-100 p-4 rounded-md mt-4">
         <h1 className="text-lg font-bold mb-2">Book Details</h1>
         <p><span className="font-semibold">Book ID:</span> {bookDetails.Book_ID}</p>
         <p><span className="font-semibold">Book Title:</span> {bookDetails.Book_Title}</p>
         <p><span className="font-semibold">Author Name:</span> {bookDetails.Author_Name}</p>
         <p><span className="font-semibold">Edition:</span> {bookDetails.Edition}</p>
         <p><span className="font-semibold">Pages:</span> {bookDetails.pages}</p>
         <p><span className="font-semibold">Cost:</span> {bookDetails.Cost}</p>
         <p><span className="font-semibold">Name of Supplier:</span> {bookDetails.Name_Of_Supplier}</p>
         <p><span className="font-semibold">No. of Books:</span> {bookDetails.No_Of_Books}</p>
         <p>
           <span className="font-semibold">Status:</span> 
           <span className={bookDetails.Status === 'available' ? 'text-green-500' : 'text-red-500'}>
             {bookDetails.Status}
           </span>
         </p>
         <div className='flex justify-between items-center p-5'>
           <button
             onClick={handleCreateBookIssue}
             className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
           >
             Issue Book
           </button>
           {message && <p className="text-green-500">{message}</p>}
           <Link to='/service'>
             <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200'>Back</button>
           </Link>
         </div>
       </div>
       
        )}
      </div>
    </div>
    </div>
  );
};

export default BookIssue;
