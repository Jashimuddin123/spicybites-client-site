import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

const FoodPurchase = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user from context
    const foodPurchase = useLoaderData(); // Get the food details from loader
    console.log('foodpurchase', foodPurchase);
    
    const { id } = useParams(); // Get params (if needed)

    // Initialize state variables
    const [foodName, setFoodName] = useState(foodPurchase.food_name || '');
    const [price, setPrice] = useState(foodPurchase.price || '');
    const [quantity, setQuantity] = useState(1);
    const [purchaseDate] = useState(new Date().toLocaleString()); // Capture current date
    const [foodImage] = useState(foodPurchase.food_image || ''); // Initialize foodImage from foodPurchase object

    console.log('foodPurchase:', foodPurchase);
    console.log('id:', id);

    const handlePurchase = (e) => {
        e.preventDefault();

        const purchaseData = {
            foodName,
            foodImage,

            price,
            quantity,
            buyerName: user.displayName,   // Get buyer's name from logged-in user
            buyerEmail: user.email,        // Get buyer's email from logged-in user
            purchaseDate,
            foodId: id,                    // Include the food ID in the request (optional)
        };

        // POST request to add food purchase
        fetch('http://localhost:5000/purchasefood', { // Updated the endpoint here
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchaseData),
        })
        .then(res => res.json())
        .then(result => {
            console.log("Food item purchased successfully:", result);

            // Reset form after successful submission
            setFoodName('');
            setPrice('');
            setQuantity(1);

            // Show success toast
            toast.success("Food item purchased successfully!");
        })
        .catch(error => {
            console.error("Error purchasing food:", error);

            // Show error toast
            toast.error("Error purchasing food item. Please try again.");
        });
    };

    return (
        <div className='card bg-base-100 w-96 mx-auto shadow-xl'>
            {/* Display the food image */}
            <div className='text-center'>
                <img 
                    src={foodImage} 
                    alt={foodName} 
                    className="w-full h-48 object-cover mb-4" 
                />
            </div>
            
            <form onSubmit={handlePurchase}>
                <div>
                    <label>Food Name:</label>
                    <input 
                        type="text" 
                        value={foodName} 
                        onChange={(e) => setFoodName(e.target.value)} 
                        required 
                    />
                </div>
                
                <div>
                    <label>Price:</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                
                <div>
                    <label>Quantity:</label>
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min="1" 
                        required 
                    />
                </div>
                
                <div>
                    <label>Buyer Name:</label>
                    <input 
                        type="text" 
                        value={user.displayName} 
                        readOnly 
                    />
                </div>
                
                <div>
                    <label>Buyer Email:</label>
                    <input 
                        type="email" 
                        value={user.email} 
                        readOnly 
                    />
                </div>
                
                <div>
                    <label>Buying Date:</label>
                    <input 
                        type="text" 
                        value={purchaseDate} 
                        readOnly 
                    />
                </div>
                
                <button type="submit" className="btn btn-success">Purchase</button>
            </form>
        </div>
    );
};

export default FoodPurchase;
