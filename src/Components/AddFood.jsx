import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const AddFood = () => {
    const { user } = useContext(AuthContext); // Assuming user context is needed
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        // Log the data to the console
        console.log("Form Data:", data);
        
        // You can send a POST request to add the food item
        fetch('https://spicybites-server-site.vercel.app/addfood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            console.log("Food item added:", result);
            reset(); // Reset form after successful submission

            // Show success toast
            toast.success("Food item added successfully!");
        })
        .catch(error => {
            console.error("Error adding food:", error);

            // Show error toast
            toast.error("Error adding food item. Please try again.");
        });
    };

    return (
      <div>
        <Helmet>
  <title>
  AddFood
  </title>
</Helmet>
          <div className="bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Add A Food Item</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-6">
                        {/* Food Name */}
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Food Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Food Name"
                                {...register('food_name', { required: true })}
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Photo URL"
                                {...register('photo_url', { required: true })}
                            />
                        </div>

                        {/* Food Category */}
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Food Category</label>
                            <select
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                {...register('food_category', { required: true })}
                            >
                                <option value="spicy_curries">Spicy Curries</option>
                                <option value="hot_wings">Hot Wings</option>
                                <option value="spicy_tacos">Spicy Tacos</option>
                            </select>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="00"
                                {...register('quantity', { required: true })}
                            />
                        </div>

                        {/* Price */}
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Average Cost"
                                {...register('average_cost', { required: true })}
                            />
                        </div>

                        {/* Country Name */}
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Country Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Country Name"
                                {...register('country_name', { required: true })}
                            />
                        </div>

                        {/* Short Description */}
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Short Description</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Short Description"
                                {...register('short_description', { required: true })}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                Add Item
                            </button>
                        </div>
                    </div>
                </form>

                {/* Toast container for notifications */}
                <ToastContainer />
            </div>
        </div>
      </div>
    );
};

export default AddFood;
