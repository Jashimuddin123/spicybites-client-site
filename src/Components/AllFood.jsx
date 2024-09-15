import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const AllFood = () => {
  const [allFoods, setAllFoods] = useState([]);
  
  console.log('jashim foods here', allFoods);

  useEffect(() => {
    // Fetch data inside the component
    fetch("http://localhost:5000/addfood")
      .then(response => response.json())
      .then(data => setAllFoods(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div>
      <h2>All Food Items {allFoods.length}</h2>
      {/* <ul className="grid gap-y-8 grid-cols-3">
        {allFoods.map(food => (
          <div className="card bg-green-300 w-72 gap-y-4-10  h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={food._id}>
            <div className="card-body items-center text-center">
                <img src={food.food_image} alt="" />
              <h2 className="card-title">{food.food_name}</h2>
              <p className="text-md text-gray-600">Category: {food.food_category}</p>
            </div>
            <Link to={`/singleFood/${food._id}`}>
            <button className="text-md font-semibold flex items-center gap-2">
            Details <span><FaArrowCircleRight /></span>
           </button>
            </Link>


          </div>
        ))}
      </ul> */}



<div className="grid grid-cols-1  gap-6 mx-auto max-w-5xl">
        {allFoods.map((food, index) => (
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
                    {/* <p className="mt-2 text-gray-700 font-bold text-sm md:text-base">
                      Visitors Per Year: {tourist.total_visitors}
                    </p> */}
                    <div className="mt-4 flex items-center space-x-2">
                      {/* <img
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        src={food.food_image}
                        alt="Author"
                      /> */}
                      <span className="text-gray-700 text-xs md:text-sm">by Jashim Uddin</span>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      className="h-40 w-full md:h-full md:w-full lg:w-72 lg:h-64 rounded-lg object-cover"
                      src={food.food_image}
                    //   alt={tourist.tourist_spot_name}
                    />
                  </div>
                </div>
                <div className="bg-gray-100 text-blue-500 px-4 py-2">

                <Link to={`/singleFood/${food._id}`}>
            <button className="text-md font-semibold flex items-center gap-2">
            Details <span><FaArrowCircleRight /></span>
           </button>
            </Link>
                  {/* <Link to={`/touristDetails/${tourist._id}`}>
                    <button className="text-md  font-semibold flex items-center  gap-2">Show Details <span><FaArrowCircleRight /></span></button>
                  </Link> */}
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
