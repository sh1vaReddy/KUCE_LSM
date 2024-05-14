import { useState } from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import backgroundImage from '../../assets/conatct.jpeg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <img
        src={backgroundImage}
        alt="Contact Background"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          filter: 'blur(2px)',
          zIndex: -1 
        }}
      />
      <div className="bg-opacity-5 backdrop-filter backdrop-blur-md rounded-lg p-16 shadow-md"       style={{ backgroundColor: 'rgba(244, 241, 235, 0.7)' }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700">Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaUser className="text-gray-500" /></span>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full rounded-md pl-10 py-2 text-lg focus:outline-none focus:border-blue-500 hover:border-blue-500 border-2 border-transparent transition duration-300"
                style={{ borderColor: '#3182CE', placeholderColor: '#A0AEC0' }} 
                placeholder="Enter your name" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaEnvelope className="text-gray-900" /></span>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full rounded-md pl-12 py-2 text-lg focus:outline-none focus:border-blue-500 hover:border-blue-500 border-2 border-transparent transition duration-300"
                style={{ borderColor: '#3182CE', placeholderColor: '#A0AEC0' }} 
                placeholder="Enter your email" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="3" 
              className="w-full rounded-md py-2 text-lg focus:outline-none focus:border-blue-500 hover:border-blue-500 border-2 border-transparent transition duration-300" 
              placeholder="Type your message here"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
