import  { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import { useSelector } from 'react-redux';
import Serach from  '../../assets/Serach.jpeg'

const BookHistory = () => {
  const [books, setBooks] = useState([]);
  const { newstudent } = useSelector((state) => state.auth);
  const Roll_NO = newstudent.student.Roll_NO;

  const handleFetchBooks = async () => {
    try {
      const response = await axios.post(`https://uce-lms-backend.onrender.com/api/v1/book/details/rollno`, { Roll_NO });
      console.log(response.data);
      if (response.data.Bookhistory) {
        setBooks(response.data.Bookhistory);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
        backgroundImage: `url(${Serach})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter:`blur(3px)`,
      }}
    />
    <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-md  backdrop-filter backdrop-blur-sm bg-opacity-30" style={{ zIndex: 1 }}>
      <h1 className="text-2xl font-bold mb-4">Book's List</h1>
      <div className='flex justify-center '> 
        <button
          onClick={handleFetchBooks}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
           History
        </button>
      </div>
      <div>
        {books.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className='bg-white divide-y divide-gray-200'>
              <tr>
              <th className="px-6 py-4 whitespace-nowrap">Book ID</th>
                <th className="px-6 py-4 whitespace-nowrap">Book Title</th>
                <th className="px-6 py-4 whitespace-nowrap">Issued to</th>
                <th className="px-6 py-4 whitespace-nowrap ">Issue Date</th>
                <th className="px-6 py-4 whitespace-nowrap ">Expected Date</th>
                <th className="px-6 py-4 whitespace-nowrap ">Return Date</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border border-gray-400">{book.Book_Id} </td>
                  <td className="py-2 px-4 border border-gray-400">{book.Book_Title}</td>
                  <td className="py-2 px-4 border border-gray-400">{book.ROll_No}</td>
                  <td className="py-2 px-4 border border-gray-400">{formatDate(book.Issue_Date)}</td>
                  <td className="py-2 px-4 border border-gray-400">{formatDate(book.Excepted_Date)}</td>
                  <td className="py-2 px-4 border border-gray-400">{formatDate(book.return_Date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-950">No books issued.</p>
        )}
      </div>
      <div className='mt-5 space-x-5'>
        <Link to='/service'>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200'>Back</button>
        </Link>
      </div>
    </div>
  </div>
    
  );
}

export default BookHistory;
