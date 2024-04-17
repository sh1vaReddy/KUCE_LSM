import { useState } from 'react';
import Modal from 'react-modal';
import LibraryImage from '../../assets/Library.jpg';
import { Link } from 'react-router-dom';

const Librarian = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200"
      style={{backgroundImage: `url(${LibraryImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Librarian Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to='/libran/add'>
          <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Add Book</button>
          </Link>
          <Link to='/libran/serach'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Search Book</button>
          </Link>
          <Link to='/libran/delete'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Delete Book</button>
          </Link>
         
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Book</h2>
          <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default Librarian;
