import { useLoaderData, useNavigate, Link } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import Footer from "../Footer/Footer";
import OrderNow from "./OrderNow";
import Delivery from "./Delivery";
import { Helmet } from "react-helmet";

const Home = () => {
    const cardData = useLoaderData();
    // console.log('card data', cardData);
    
    const navigate = useNavigate();

    // Sort by purchase count to get the top 6
    const topSellingFoods = cardData
        .sort((a, b) => b.purchaseCount - a.purchaseCount)
        .slice(0, 6);

    return (
        <div>
               <Helmet>
  <title>
 Home
  </title>
</Helmet>
            <BannerSlider />
            <div className="px-4 mt-8 ">
                <h2 className="text-3xl font-bold text-center mb-8">Top 6 Best-Selling Food Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topSellingFoods.map((food) => (
                        <div key={food.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={food.food_image} alt={food.food_image} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{food.food_name}</h3>
                                <p className="text-gray-600 mb-1">Category: {food.food_category}</p>
                                <p className="text-gray-800 font-bold mb-4">Price: ${food.price}</p>
                                <p>FoodCount:  {food.purchaseCount}</p>
                                <button 
                                    onClick={() => navigate(`/singleFood/${food._id}`)}
                                    className="bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-600 transition duration-300"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add "All Food" button to navigate to AllFood page */}
            <div className="text-center mt-8">
                <Link to="/allfoods">
                    <button className="bg-lime-600 text-white px-6 font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-300">
                        View All Food
                    </button>
                </Link>
            </div>
            <OrderNow></OrderNow>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default Home;

