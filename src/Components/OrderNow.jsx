import { Link } from "react-router-dom";

const OrderNow = () => {
    return (
        <div className="flex flex-col bg-red-400 md:flex-row items-center justify-between  p-6 rounded-lg">
            {/* Image Section */}
            <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                    src="https://i.ibb.co.com/s3Qpz8B/banner1.jpg" 
                    alt="Delicious Burger" 
                    className="w-9/12 h-auto rounded-lg"
                />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Spicyabaites Commitment To 100% Natural Ingredients!
                </h1>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit placerat ex, vitae accumsan enim semper eget.
                </p>
                <ul className="space-y-2 mb-6 text-lg text-gray-700">
                    <li>✅ Fresh Harvest Chicken Salad</li>
                    <li>✅ Vibrant Mediterranean Veggie Wrap</li>
                    <li>✅ Nourishing Sunset Quinoa Bowl</li>
                    <li>✅ Zen Garden Stir-fry Delight</li>
                    <li>✅ Invigorating Berry Burst Smoothie</li>
                </ul>
                <Link to="/addfood">
                    <button className="mt-4 bg-blue-600 px-8 py-4 rounded text-white 
                        transition duration-200  text-xl ease-in-out hover:bg-black">
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OrderNow;
