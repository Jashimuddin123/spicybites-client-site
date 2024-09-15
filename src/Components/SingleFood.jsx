import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const singleFoods = useLoaderData(); // Fetch the food data from the loader

  return (
    <div>
        <h1>this is single food pages</h1>
      <h2>Details for: {singleFoods.food_name}</h2>
      <p>Category: {singleFoods.food_category}</p>
      <p>Description: {singleFoods.description}</p>
    </div>
  );
};

export default SingleFood;
