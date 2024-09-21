import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const singleFood = useLoaderData(); // Fetch the food data from the loader
  // console.log('single foods',singleFood);
  

     


  return (
    <div>
 
 <div className="card bg-base-100 w-96 mx-auto shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={singleFood.food_image}
      alt="food_img"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="font-semibold">Details for: {singleFood.food_name}</h2>
  <p className="font-semibold">Category: {singleFood.food_category}</p>
  <p className="font-semibold">Description: {singleFood.description}</p>
    <div className="card-actions">
    <Link to= {`/foodPurchase/${singleFood._id}`}> 
            <button className="text-md btn text-white font-semibold btn-success flex items-center gap-2">
            Purchase
           </button>
            </Link>
    </div>
  </div>
</div>

     
      
      
     
      
    </div>
  );
};

export default SingleFood;
