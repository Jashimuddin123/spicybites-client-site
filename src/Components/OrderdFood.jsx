import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const OrderdFood = () => {
    const purchaseFoodData = useLoaderData(); // Fetching data using useLoaderData
    const [food, setFood] = useState(purchaseFoodData); // Initialize state with loader data

    useEffect(() => {
        setFood(purchaseFoodData); // Ensure food state is set when the component is mounted
    }, [purchaseFoodData]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/purchasefood/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                        // Filter out the deleted item from the food state
                        const remaining = food.filter(item => item._id !== id);
                        setFood(remaining);
                    }
                })
                .catch(err => {
                    console.error('Error deleting:', err);
                    Swal.fire(
                        'Oops!',
                        'Failed to delete item.',
                        'error'
                    );
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your item is safe :)',
                    'info'
                );
            }
        });
    };

    return (
        <div>
            <h2>Ordered Food List</h2>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Added Time</th>
                        <th>Owner</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {food && food.length > 0 ? (
                        food.map((foodItem) => (
                            <tr key={foodItem._id}>
                                <td><img src={foodItem.foodImage} alt={foodItem.foodName} style={{ width: '100px', height: '100px' }} /></td>
                                <td>{foodItem.foodName}</td>
                                <td>${foodItem.price}</td>
                                <td>{new Date(foodItem.purchaseDate).toLocaleString()}</td>
                                <td>{foodItem.buyerName}</td>
                                <td>
                                    <button onClick={() => handleDelete(foodItem._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No ordered food items available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderdFood;
