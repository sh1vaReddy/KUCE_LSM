import { useState } from 'react';
import Modal from 'react-modal';
import ServiceImage from '../../assets/Service.jpg';
import { Link } from 'react-router-dom';

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const closeModal = () => {
    setIsModalOpen(false);
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
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', 
        }}
      ></div>
    
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className=" p-8 rounded-lg shadow-md backdrop-filter backdrop-blur-3xl">
          <h2 className="text-2xl font-semibold mb-4">Book Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to='/book/issue'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Book Issue</button>
            </Link>
            <Link to='/book/return'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Book Return</button>
            </Link>
            <Link to='/book/History'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Book Serach</button>
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
    </div>
  );
}

export default Service;
