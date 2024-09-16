import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"; // Use this for the update button navigation

const MyAdedFood = () => {
    const myAdedFood = useLoaderData();
    console.log('my added page food items', myAdedFood);
    
    return (
        <div>
            <h1>This is my added food items page</h1>

            {myAdedFood.length > 0 ? (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            {/* <th>Quantity</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myAdedFood.map((food) => (
                            <tr key={food._id}>
                                <td>
                                    <img 
                                        src={food.food_image} 
                                        alt={food.food_name} 
                                        width="100" 
                                        height="100" 
                                    />
                                </td>
                                <td>{food.food_name}</td>
                                <td>${food.price}</td>
                                <td>{food.food_category}</td>
                                <td>{food.quantity}</td>
                                <td>
                                    {/* Update button */}
                                    <Link to={`/updateFood/${food._id}`}>
                                        <button>Update</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No food items added yet.</p>
            )}
        </div>
    );
};

export default MyAdedFood;
