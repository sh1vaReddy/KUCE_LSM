import { useState } from 'react';
import LibraryImage from '../../assets/register.jpeg';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Roll_NO: '',
    Branch: '',
    Date_Of_admission: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://uce-lms-backend.onrender.com/api/v1/register`, formData);
      console.log(response);
      setFormData('')
    } catch (error) {
      console.error('Error during registration:', error);
     
    }
  };
  

  return (
    <div style={{ backgroundImage: `url(${LibraryImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmitForm} className="w-full max-w-md mx-auto p-8 b rounded-lg shadow-md " style={{ backdropFilter: 'blur(100px)', opacity: 0.9 }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Registration Form</h2>
        <div className="mb-4">
          <label htmlFor="Name" className="block text-sm font-semibold text-gray-600">Name:</label>
          <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleInputChange} placeholder="Enter Student Name" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="Roll_NO" className="block text-sm font-semibold text-gray-600">Roll No:</label>
          <input type="text" id="Roll_NO" name="Roll_NO" value={formData.Roll_NO} onChange={handleInputChange} placeholder="Enter Student Roll No" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="Branch" className="block text-sm font-semibold text-gray-600">Branch:</label>
          <input type="text" id="Branch" name="Branch" value={formData.Branch} onChange={handleInputChange} placeholder="Enter Your Branch" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="Date_Of_admission" className="block text-sm font-semibold text-gray-600">Date of Admission:</label>
          <input type="date" id="Date_Of_admission" name="Date_Of_admission" value={formData.Date_Of_admission} onChange={handleInputChange} placeholder="Enter Admission Year" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
