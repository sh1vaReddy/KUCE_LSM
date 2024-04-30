import kuce from '../../assets/Kakatiya-University.webp';
import { MdRefresh } from "react-icons/md";
import { Link } from 'react-router-dom';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        <img src={kuce} alt='Kakatiya University' className="rounded-full h-28 w-28 shadow-lg"/>
      </div>
      <p className="mt-8 text-lg text-gray-600 font-semibold">Loading...</p>
      <Link to='/'>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 flex items-center">
        <MdRefresh className="text-xl mr-2" />
        Retry
      </button>
      </Link>
      
    </div>
  );
}

export default Loader;
