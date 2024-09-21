import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const MyAdedFood = () => {
    const myAdedFood = useLoaderData();
    
    return (
       <div>
        <Helmet>
  <title>
   MyAdedFood
  </title>
</Helmet>
         <div className="overflow-x-auto">
            {myAdedFood.length > 0 ? (
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-200 p-2">Food Image</th>
                            <th className="border border-gray-200 p-2">Food Name</th>
                            <th className="border border-gray-200 p-2">Price</th>
                            <th className="border border-gray-200 p-2">Category</th>
                            <th className="border border-gray-200 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myAdedFood.map((food) => (
                            <tr key={food._id}>
                                <td className="border border-gray-200 p-2">
                                    <img 
                                        src={food.food_image} 
                                        alt={food.food_name} 
                                        className="w-24 h-24 object-cover" 
                                    />
                                </td>
                                <td className="border border-gray-200 p-2">{food.food_name}</td>
                                <td className="border border-gray-200 p-2">${food.price}</td>
                                <td className="border border-gray-200 p-2">{food.food_category}</td>
                                <td className="border border-gray-200 p-2">
                                    <Link to={`/updateFood/${food._id}`}>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No food items added yet.</p>
            )}
        </div>
       </div>
    );
};

export default MyAdedFood;
