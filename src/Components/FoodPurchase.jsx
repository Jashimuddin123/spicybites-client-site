import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';


const FoodPurchase = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user from context
    const foodPurchase = useLoaderData(); // Get the food details from loader
    // console.log('foodpurchase', foodPurchase);
    
    const { id } = useParams(); // Get params (if needed)

    // Initialize state variables
    const [foodName, setFoodName] = useState(foodPurchase.food_name || '');
    const [price, setPrice] = useState(foodPurchase.price || '');
    const [quantity, setQuantity] = useState(1);
    const [purchaseDate] = useState(new Date().toLocaleString()); // Capture current date
    const [foodImage] = useState(foodPurchase.food_image || ''); // Initialize foodImage from foodPurchase object

    // console.log('foodPurchase:', foodPurchase);
    // console.log('id:', id);

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
        fetch('https://spicybites-server-site.vercel.app/purchasefood',  { // Updated the endpoint here
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
           alert("Food item purchased successfully!");
        })
        .catch(error => {
            console.error("Error purchasing food:", error);

            // Show error toast
            toast.error("Error purchasing food item. Please try again.");
        });

        fetch(`https://spicybites-server-site.vercel.app/purchasefood/${id}`,  { // Updated the endpoint here
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        
        })
    };

    

    return (
    <div>
      <Helmet>
  <title>
 foodpurchase
  </title>
</Helmet>

            <div className='card px-10 py-2 bg-base-100 w-[700px] mx-auto shadow-xl'>
            {/* Display the food image */}
            <div className='text-center'>
                <img 
                    src={foodImage} 
                    alt={foodName} 
                    className="w-full h-full object-cover mb-4" 
                />
            </div>
            
            <form onSubmit={handlePurchase}>
                <div>
                    <label className='font-bold'>Food Name:</label>
                    <input 
                    className='border px-2  rounded py-2 w-full'
                        type="text" 
                        value={foodName} 
                        onChange={(e) => setFoodName(e.target.value)} 
                        required 
                    />
                </div>
                
                <div>
                    <label className='font-bold'>Price:</label>
                    <input 
                     className='border px-2  rounded py-2 w-full'
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                
                <div>
                    <label className='font-bold'>Quantity:</label>
                    <input 
                     className='border px-2  rounded py-2 w-full'
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min="1" 
                        required 
                    />
                </div>
                
                <div>
                    <label className='font-bold'>Buyer Name:</label>
                    <input
                      className='border px-2  rounded py-2 w-full'
                        type="text" 
                        value={user.displayName} 
                        readOnly 
                    />
                </div>
                
                <div>
                    <label className='font-bold'>Buyer Email:</label>
                    <input 
                     className='border px-2  rounded py-2 w-full'
                        type="email" 
                        value={user.email} 
                        readOnly 
                    />
                </div>
                
                <div>
                    <label className='font-bold'>Buying Date:</label>
                    <input 
                     className='border px-2  rounded py-2 w-full'
                        type="text" 
                        value={purchaseDate} 
                        readOnly 
                    />
                </div>
                
                <button type="submit" className="btn w-full btn-info">Purchase</button>
            </form>
        </div>
    </div>
    );
};

export default FoodPurchase;
