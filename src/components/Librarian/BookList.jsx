import { useEffect, useState } from 'react';
import axios from 'axios';
import Bookdteaails from '../../assets/BookDeatsils.jpeg'

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [rollNumberFilter, setRollNumberFilter] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/book/details");
        setBooks(response.data.Book);
        setFilteredBooks(response.data.Book);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filterByRollNumber = () => {
    setFilteredBooks(books.filter(book => book.ROll_No === rollNumberFilter));
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
        backgroundImage: `url(${Bookdteaails})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter:`blur(1px)`
      }}
    />
    <div className="max-w-4xl mx-auto  backdrop-filter backdrop-blur-sm bg-opacity-10">
      <h2 className="text-2xl font-bold mb-4">Book's Details</h2>
      <div className="flex flex-wrap gap-4">
        <button onClick={() => setFilteredBooks(books)} className="px-4 py-2 bg-gray-200 rounded-md">Clear Filters</button>
        <button onClick={() => {
          const input = prompt("Enter Roll Number");
          if (input !== null) {
            setRollNumberFilter(input);
            filterByRollNumber();
          }
        }} className="px-4 py-2 bg-gray-200 rounded-md">Filter by Roll Number</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredBooks.map(book => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">{book.Book_Id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.Book_Title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.ROll_No}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(book.Issue_Date)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(book.Excepted_Date)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(book.return_Date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default BookList;
