import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">University College of Engineering, Kakatiya University</p>
            <p>Kothagudem, Telangana - 507118, India</p>
          </div>
          <div className="flex flex-col">
            <p><MdEmail className="inline-block"/> Email: principal_ku@yahoo.com, principal@kuce.ac.in, principaluceku@kakatiya.ac.in</p>
            <p><IoCallSharp className="inline-block"/> Office: 8500378531 </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
