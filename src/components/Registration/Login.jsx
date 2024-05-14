import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../Redux/auth';
import { useNavigate } from 'react-router-dom';
import login from '../../assets/Login.jpg';
import {toast} from 'react-toastify'  

const Login = () => {
  const [rollNo, setRollNo] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`https://uce-lms-backend.onrender.com/api/v1/login`, { Roll_No: rollNo });
      
      if (response.status !== 200) {
        throw new Error('Invalid response status');
      }

      dispatch(setCredentials(response.data));
      
      navigate("/profile");

    } catch (error) {
      console.log(error);
      toast.error("Student Not Found");
    }
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
        src={login}
        alt="Login Background"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          filter: 'blur(5px)',
          zIndex: -1 
        }}
      />
      <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-md w-full "  style={{ backgroundColor: 'rgba(244, 241, 235, 0.7)' }}
      >
        <h1 className="text-2xl mb-4 text-center">Student Login</h1>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Roll Number"
          value={rollNo}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
