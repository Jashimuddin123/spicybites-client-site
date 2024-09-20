import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllFood = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  
  console.log('jashim foods here', allFoods);

  useEffect(() => {
    // Fetch data inside the component
    const fetchFoods = async () => {
      let url = "http://localhost:5000/addfood";
      if (searchTerm) {
        // If there's a search term, append it as a query parameter
        url += `?food_name=${searchTerm}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllFoods(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFoods();
  }, [searchTerm]); // Refetch data whenever the search term changes

  // Filter matching and non-matching foods
  const filteredFoods = allFoods.filter((food) =>
    food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const remainingFoods = allFoods.filter(
    (food) => !food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Combine matching foods first, followed by the rest
  const displayedFoods = [...filteredFoods, ...remainingFoods];

  return (
    <div>
     

      {/* Search Input */}
      <div className="mb-4 mx-auto w-96">
        <h1 className="font-bold my-2">Search Your Food Name</h1>
        <input
          type="text"
          placeholder="Search food by name"
          className="p-2 border border-red-900 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
      </div>

      <div className="grid grid-cols-1 gap-6 mx-auto max-w-5xl">
        {displayedFoods.map((food, index) => (
          <li className="list-none" key={index}>
            <div className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-4">
                    <h2 className="text-xl md:text-2xl font-bold mt-2">
                      {food.food_name}
                    </h2>
                    <p className="text-md text-gray-600">Category: {food.food_category}</p>
                    <p className="mt-4 text-gray-700 text-sm md:text-base">
                      Saint Martin’s Island is a small island in the northeast
                      of the Bay of Bengal, known for its coral reef and white
                      sandy beaches.
                    </p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="text-gray-700 text-xs md:text-sm">by Jashim Uddin</span>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      className="h-40 w-full md:h-full md:w-full lg:w-72 lg:h-64 rounded-lg object-cover"
                      src={food.food_image}
                      alt={food.food_name}
                    />
                  </div>
                </div>
                <div className="bg-gray-100 text-blue-500 px-4 py-2">
                  <Link to={`/singleFood/${food._id}`}>
                    <button className="text-xl font-semibold flex items-center gap-2">
                      Details <span><FaArrowCircleRight /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
