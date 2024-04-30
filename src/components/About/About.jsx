import about from '../../assets/about cover.jpg';

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg overflow-hidden shadow-md mb-8">
          <img
            className="w-full h-[800px] object-cover"
            src={about}
            alt="University College of Engineering"
          />
        </div>
        <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="text-center">
            <h1 className="text-3xl mb-4">Library</h1>
            <div className="mb-4">
              <p className="text-lg font-semibold">Dr K Bikshalu</p>
              <p className="text-gray-600">Incharge — Library</p>
              <p className="text-gray-600">E-mail: hari_etta@kakatiya.ac.in</p>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="w-1/2 pr-4 border-r border-gray-300">
              <h2 className="text-xl font-semibold mb-4">Books</h2>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 p-4 font-medium">Total No of Titles</td>
                    <td className="bg-gray-100 p-4 text-gray-600">1256</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 p-4 font-medium">Total No of Volumes</td>
                    <td className="bg-gray-100 p-4 text-gray-600">22000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/2 pl-4">
              <h2 className="text-xl font-semibold mb-4">Journals</h2>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 p-4 font-medium">Total No of International Journals</td>
                    <td className="bg-gray-100 p-4 text-gray-600">10</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 p-4 font-medium">Total No of National Journals</td>
                    <td className="bg-gray-100 p-4 text-gray-600">20</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 p-4 font-medium">Total No of Magazines</td>
                    <td className="bg-gray-100 p-4 text-gray-600">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col items-start mb-6">
            <p className="text-lg font-semibold">Library Timings:</p>
            <p className="text-gray-600">Monday to Saturday: 09:20 A.M to 04:10 P.M</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Library Rules And Regulations:</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Identity Card is compulsory for getting access to the library.</li>
              <li>Strict order and silence shall be maintained in the library; speak softly if needed.</li>
              <li>Four books will be issued to UG students.</li>
              <li>If the books are not returned within the specified time, it will be viewed seriously, and a fine will be charged as per rules.</li>
              <li>In case a user loses a book, he/she would have to either replace the book or deposit the price of the book in the library.</li>
              <li>Any marking or writing in the book is strictly prohibited.</li>
              <li>Reference books will not be issued but are available for study within the Library.</li>
              <li>Library borrower cards are not transferable. The borrower is responsible for the books borrowed on his/her card.</li>
              <li>Tearing of sheets from books and newspapers is strictly prohibited and is punishable.</li>
              <li>All the students should return their Library Borrower Cards after completion of their course and obtain a “No-Due” Certificate from the Library.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
