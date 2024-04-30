import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import profile from '../../assets/Profile.jpeg'

const Profile = () => {
  const [Name, setName] = useState('');
  const [Roll_no, setRoll_No] = useState('');
  const [Branch, setBranch] = useState('');
  const [date, setDate] = useState('');
  const [noofcards, setNoOfCards] = useState('');
  const { newstudent } = useSelector((state) => state.auth);
  const res = newstudent.student;

  useEffect(() => {
    setName(res.Name);
    setRoll_No(res.Roll_NO);
    setBranch(res.Branch);
    setDate(res.Date_Of_admission);
    setNoOfCards(res.No_Of_cards);
  }, [res]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center filter blur-sm" style={{ backgroundImage: `url(${profile})` }}></div>
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md  bg-opacity-25  border border-gray-300 rounded-md p-6  backdrop-filter backdrop-blur-3xl">
        <p className="text-gray-200 mb-4">
          <span className="text-white font-semibold">Name:</span> {Name}
        </p>
        <p className="text-gray-200 mb-4">
          <span className="text-white font-semibold">Roll Number:</span> {Roll_no}
        </p>
        <p className="text-gray-200 mb-4">
          <span className="text-white font-semibold">Branch:</span> {Branch}
        </p>
        <p className="text-gray-200 mb-4">
          <span className="text-white font-semibold">Date of Admission:</span> {formatDate(date)}
        </p>
        <p className="text-gray-200 mb-4">
          <span className="text-white font-semibold">Number of Cards:</span> {noofcards}
        </p>
        <Link to='/service'>
        <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Next</button>
      </div>
        </Link>
        
      </div>
      
    </div>
    </div>
    
  );
};

export default Profile;
