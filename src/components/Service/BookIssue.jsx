import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookIssue = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateBookIssue = () => {
    // Implement logic to issue a book using the bookId
    // For example, you can make an API call or perform any other action
    // Here, I'm just setting a message to indicate that the book is issued
    setMessage('Book issued successfully!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
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
      <div className='flex justify-between items-center'>
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
  )
}

export default BookIssue;
