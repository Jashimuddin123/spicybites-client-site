import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Gallery = () => {
    const galleryData = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        userName: "Jashim Uddin", // Assuming the user is logged in and the name is available
        feedback: "",
        imageUrl: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data logic here (e.g., API call)
        setIsModalOpen(false);
        Swal.fire("Success!", "Your experience has been added!", "success");
    };

    return (
      <div>
           <Helmet>
  <title>
 foodpurchase
  </title>
</Helmet>
          <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/Dtr3vPN/685.jpg')" }}>
            <div className="bg-black bg-opacity-50 min-h-screen py-10">
                <h2 className="text-white text-4xl font-bold text-center mb-10">
                    Good Food Gallery
                </h2>

                {/* Add Button */}
                <div className="text-center mb-6">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add Experience
                    </button>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryData && galleryData.map((item, index) => (
                            <div 
                                key={index} 
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
                            >
                                {/* Image */}
                                <img
                                    src={item.food_image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                                    <h3 className="text-lg font-semibold text-white">
                                        {item.food_name}
                                    </h3>
                                </div>

                                {/* Text content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.food_name}
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-8 w-full max-w-md">
                            <h3 className="text-2xl font-bold mb-4">Add Your Experience</h3>
                            <form onSubmit={handleSubmit}>
                                {/* User's Name (Read-only) */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        name="userName"
                                        value={formData.userName}
                                        readOnly
                                        className="w-full px-4 py-2 border rounded-md bg-gray-200"
                                    />
                                </div>

                                {/* Feedback/Experience */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Your Feedback</label>
                                    <textarea
                                        name="feedback"
                                        value={formData.feedback}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-md"
                                        placeholder="Share your experience..."
                                    ></textarea>
                                </div>

                                {/* Image URL */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Image URL</label>
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-md"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <button
                                className="mt-4 text-red-500 hover:text-red-700"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    );
};

export default Gallery;
