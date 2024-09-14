import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
        <Link to="/" className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
            Go to Homepage
        </Link>
    </div>
    );
};

export default NotFound;