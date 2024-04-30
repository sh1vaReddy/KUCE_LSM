import { MdError } from "react-icons/md";

const PageNotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <MdError className="text-6xl mb-4" />
        <p className="text-lg text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
      </div>
    );
  };
  
  export default PageNotFound;
  