import { useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios';
import addbooks from '../../assets/addbooks.jpeg'

const AddBook = () => {
  const [Bookreg, setBookreg] = useState({
    Book_ID: "",
    Book_Title: "",
    Author_Name: "",
    Edition: "",
    pages: "",
    cost: "",
    Name_Of_Supplier: "",
    No_Of_Books: ""
  });

  const handleInputChange = (e) => {
    setBookreg({
      ...Bookreg,
      [e.target.name]: e.target.value
    });
  };

  const handleBookRegister = async (e) => {
    e.preventDefault();
    try {
      const { Book_ID, Book_Title, Author_Name, Edition, pages, cost, Name_Of_Supplier, No_Of_Books } = Bookreg;
      if (!Book_ID || !Book_Title || !Author_Name || !Edition || !pages || !cost || !Name_Of_Supplier || !No_Of_Books) {
        toast.error("Please fill all fields");
        return;
      }
      const response = await axios.post(`http://localhost:8000/api/v1/createBooks`, Bookreg);
      console.log(response);
      toast.success("Book successfully created");
     
      setBookreg({
        Book_ID: "",
        Book_Title: "",
        Author_Name: "",
        Edition: "",
        pages: "",
        cost: "",
        Name_Of_Supplier: "",
        No_Of_Books: ""
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
     <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${addbooks})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <div className="">
    <form className="w-full max-w-lg mx-auto  p-8 bg-white rounded-lg shadow-md overflow-y-auto backdrop-filter backdrop-blur-sm bg-opacity-10" onSubmit={handleBookRegister} >
        <div className="mb-4">
          <label htmlFor="Book_ID" className="block text-sm font-semibold text-gray-600">Book ID:
          <input type="text" id="Book_ID" name="Book_ID" placeholder="Enter Book Id" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          
        </div>
        <div className="mb-4">
          <label htmlFor="Book_Title" className="block text-sm font-semibold text-gray-600">Book Title:
          <input type="text" id="Book_Title" name="Book_Title" placeholder="Enter Book Title" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          
        </div>
        <div className="mb-4">
          <label htmlFor="Author_Name" className="block text-sm font-semibold text-gray-600">Author Name:
          <input type="text" id="Author_Name" name="Author_Name" placeholder="Enter Author Name" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
         
        </div>
        <div className="mb-4">
          <label htmlFor="Edition" className="block text-sm font-semibold text-gray-600">Edition:
          <input type="text" id="Edition" name="Edition" placeholder="Enter Book Edition" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          
        </div>
        <div className="mb-4">
          <label htmlFor="pages" className="block text-sm font-semibold text-gray-600">Pages:
          <input type="text" id="pages" name="pages" placeholder="Enter Pages" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          
        </div>
        <div className="mb-4">
          <label htmlFor="cost" className="block text-sm font-semibold text-gray-600">Cost:
          <input type="text" id="cost" name="cost" placeholder="Enter Book Cost"onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
         
        </div>
        <div className="mb-4">
          <label htmlFor="Name_Of_Supplier" className="block text-sm font-semibold text-gray-600">Name Of Supplier:
          <input type="text" id="Name_Of_Supplier" name="Name_Of_Supplier" placeholder="Enter Name Of Supplier" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
         
        </div>
        <div className="mb-4">
          <label htmlFor="No_Of_Books" className="block text-sm font-semibold text-gray-600">Number Of Books:
          <input type="text" id="No_Of_Books" name="No_Of_Books" placeholder="Enter Number Of Books" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </label>
          
        </div>
        <div className="flex justify-center">
        <button className="
        flex justify-center align-middle
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 
        rounded-full focus:outline-none 
        focus:ring focus:ring-blue-200">Book Creation</button>
        </div>
        
      </form>
    </div>
    
      </div>
    </>
  )
}

export default AddBook