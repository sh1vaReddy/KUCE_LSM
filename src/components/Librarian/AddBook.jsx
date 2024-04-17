

const AddBook = () => {

  const handleInputChange= () =>{

  }
  const  handleBookRegister = (e) =>
  {
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <>
    <form className="w-full max-w-lg mx-auto m-8 p-8 bg-white rounded-lg shadow-md" onSubmit={handleBookRegister}>
  <div className="mb-4">
    <label htmlFor="Book_ID" className="block text-sm font-semibold text-gray-600">Book ID:</label>
    <input type="text" id="Book_ID" name="Book_ID" placeholder="Enter Book Id" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="Book_Title" className="block text-sm font-semibold text-gray-600">Book Title:</label>
    <input type="text" id="Book_Title" name="Book_Title" placeholder="Enter Book Title" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="Author_Name" className="block text-sm font-semibold text-gray-600">Author Name:</label>
    <input type="text" id="Author_Name" name="Author_Name" placeholder="Enter Author Name" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="Edition" className="block text-sm font-semibold text-gray-600">Edition:</label>
    <input type="text" id="Edition" name="Edition" placeholder="Enter Book Edition" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="pages" className="block text-sm font-semibold text-gray-600">Pages:</label>
    <input type="text" id="pages" name="pages" placeholder="Enter Pages" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="cost" className="block text-sm font-semibold text-gray-600">Cost:</label>
    <input type="text" id="cost" name="cost" placeholder="Enter Book Cost"onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="Name_Of_Supplier" className="block text-sm font-semibold text-gray-600">Name Of Supplier:</label>
    <input type="text" id="Name_Of_Supplier" name="Name_Of_Supplier" placeholder="Enter Name Of Supplier" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="No_Of_Books" className="block text-sm font-semibold text-gray-600">Number Of Books:</label>
    <input type="text" id="No_Of_Books" name="No_Of_Books" placeholder="Enter Number Of Books" onChange={handleInputChange} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-200 shadow-md transform transition duration-300 ease-in-out hover:scale-105">
    Create Book
  </button>
</div>

</form>

    </>
  )
}

export default AddBook