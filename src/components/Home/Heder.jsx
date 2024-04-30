import { IoLocationSharp } from "react-icons/io5";
import kuce from '../../assets/Kakatiya-University.webp'
import NavBar from "./NavBar";
import { GiBookshelf } from "react-icons/gi";
function Header() {
    return (
      <>
        <header className="bg-gray-800 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={kuce}
                  alt="Logo"
                />
                <span className="text-2xl font-bold ml-4">
                  University College of Engineering, Kakatiya University
                </span>

              </div>
              
              <div className="flex items-center">
              Kothagudem, Telangana - 507118, India
              <IoLocationSharp size={20}/>
              </div>
            </div>
            <div className="text-2xl font-bold ml-4">
            <p className="text-2xl font-bold flex items-center">
          <GiBookshelf  className="mr-2"/>
          Library Management System</p>
            </div>
            
          </div>
          <NavBar/>
        </header>
      </>
    );
  }
  
  export default Header;
  