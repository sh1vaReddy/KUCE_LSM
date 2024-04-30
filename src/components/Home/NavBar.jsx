import { IoHome, IoLibrary} from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex gap-10">
          <Link to="/">
          <p className="text-lg font-semibold flex items-center">
          <IoHome className="mr-2" />
            Home
          </p>
          </Link>
          <Link to='/about'>
          <p className="text-lg font-semibold flex items-center">
          <IoIosInformationCircle className="mr-2"/> 
          About
          </p>
          </Link>
          <Link to='/login'>
          <p className="text-lg font-semibold flex items-center">
          <GrServices  className="mr-2"/>
            Services</p>
          </Link>
          <Link to='/libran'>
          <p className="text-lg font-semibold flex items-center">
          <IoLibrary className="mr-2" />
            Librarian
          </p>
          </Link>
         <Link to='/contact'>
         <p className="text-lg font-semibold flex items-center">
          <RiContactsFill  className="mr-2"/>
            Contact
          </p>
         </Link>
          <Link to='/register'>
          <p className="text-lg font-semibold flex items-center">
            <PiStudentBold className="mr-2"/>
            Student Registration
          </p>
          </Link>
          
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
