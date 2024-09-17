import { useLoaderData } from "react-router-dom";

const Gallery = () => {
    const galleryData = useLoaderData();
    console.log("This is useLoader data for gallery:", galleryData);

    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/Dtr3vPN/685.jpg')" }}>
            <div className="bg-black bg-opacity-50 min-h-screen py-10">
                <h2 className="text-white text-4xl font-bold text-center mb-10">
                    Good Food Gallery
                </h2>

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
            </div>
        </div>
    );
};

export default Gallery;
