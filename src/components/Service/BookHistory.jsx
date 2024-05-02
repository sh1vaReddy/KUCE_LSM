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
      const response = await axios.post(`https://uce-lms-backend.onrender.com/api/v1/history`, { Roll_NO });
      console.log(response.data);
      if (response.data.book) {
        setBooks(response.data.book);
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
      }}
    />
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md  backdrop-filter backdrop-blur-sm bg-opacity-30" style={{ zIndex: 1 }}>
      <h1 className="text-2xl font-bold mb-4">Issued Books List</h1>
      <div className='flex justify-center '> 
        <button
          onClick={handleFetchBooks}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          Fetch Issued Books
        </button>
      </div>
      <div>
        {books.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-400">Book ID</th>
                <th className="py-2 px-4 border border-gray-400">Date of Issue</th>
                <th className="py-2 px-4 border border-gray-400">Issued to</th>
                <th className="py-2 px-4 border border-gray-400">Expcet Date</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border border-gray-400">{book.BookId} </td>
                  <td className="py-2 px-4 border border-gray-400">{formatDate(book.Date_of_Issue)}</td>
                  <td className="py-2 px-4 border border-gray-400">{book.student}</td>
                  <td className="py-2 px-4 border border-gray-400">{formatDate(book.Date_of_Return)}</td>
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
