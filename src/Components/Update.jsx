import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Update = () => {
    const updateData = useLoaderData();
    console.log('update data here', updateData);
    
    // State management for each input field
    const [foodName, setFoodName] = useState(updateData.food_name);
    const [foodPrice, setFoodPrice] = useState(updateData.price);
    const [foodCategory, setFoodCategory] = useState(updateData.food_category);
    const [foodImage, setFoodImage] = useState(updateData.food_image);

    const handleUpdate = (event) => {
        event.preventDefault();
        const updatedFoodName = foodName;
        const updatedFoodPrice = foodPrice;
        const updatedFoodCategory = foodCategory;
        const updatedFoodImage = foodImage;
        
const updateFoodData = {updatedFoodName, updatedFoodPrice,updatedFoodImage,updatedFoodCategory}

        console.log('Updated object:', {
            foodName: updatedFoodName,
            price: updatedFoodPrice,
            category: updatedFoodCategory,
            image: updatedFoodImage,
        });
        
        // You can proceed with your update logic here (e.g., API call to update data)
      
            fetch(`http://localhost:5000/addfood/${updateData._id}`,{
                method:"PUT",
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(updateFoodData)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log('jashim adnan',data);

                if(data.modifiedCount>0){
                    // toast.success("Food updated successfully!");
                    alert('food updated succesfully')
                }
                
            })


    };

    return (
        <div>
            <h2>This is the update page</h2>

            {/* Form with default values populated from useLoaderData */}
            <form className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10 mt-12" onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="food_name">Food Name:</label>
                    <input
                    className="input input-bordered w-full mt-2"
                        type="text"
                        id="food_name"
                        name="food_name"
                        defaultValue={updateData.food_name}
                        onChange={(e) => setFoodName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                    className="input input-bordered w-full mt-2"
                        type="number"
                        id="price"
                        name="price"
                        defaultValue={updateData.price}
                        onChange={(e) => setFoodPrice(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="food_category">Food Category:</label>
                    <input
                    className="input input-bordered w-full mt-2"
                        type="text"
                        id="food_category"
                        name="food_category"
                        defaultValue={updateData.food_category}
                        onChange={(e) => setFoodCategory(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="food_image">Food Image URL:</label>
                    <input
                    className="input input-bordered w-full mt-2"
                        type="text"
                        id="food_image"
                        name="food_image"
                        defaultValue={updateData.food_image}
                        onChange={(e) => setFoodImage(e.target.value)}
                    />
                </div>

               

                {/* Update button */}
                <button className="bg-teal-600 py-2 text-white w-full" type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
