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
      <ul className="grid grid-cols-3">
        {allFoods.map(food => (
          <div className="card bg-green-300 w-72 gap-y-4-10  h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={food._id}>
            <div className="card-body items-center text-center">
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
      </ul>
    </div>
  );
};

export default AllFood;
