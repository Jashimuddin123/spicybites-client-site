import { IoMdRestaurant } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";


const Delivery = () => {
    return (
    <div>

           <div className="mt-16 mb-2">
        <h1 className="text-4xl my-4 font-bold text-center">Fastest Delivery</h1>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg ">
            {/* Image Section */}
            <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                <img 
                    src="https://i.ibb.co.com/KhZxdWd/2149561203.jpg" 
                    alt="Delicious Burger" 
                    className="w-11/12 md:w-full  rounded-lg"
                />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 mb-6 text-center md:text-left px-4 md:px-6 mt-5 rounded bg-lime-400">
                <div className="flex py-4 items-center justify-center md:justify-start gap-4 mb-6">
                    <IoMdRestaurant className="text-3xl text-yellow-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Order food from menu</h1>
                        <p className="text-sm text-gray-700">Food many Have lot of catagorys,you can find you foood using menu.</p>
                    </div>
                </div>
                <div className="flex py-4 items-center justify-center md:justify-start gap-4 mb-6">
                    <GiNotebook className="text-3xl text-blue-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Pay your food bill</h1>
                        <p className="text-sm text-gray-700">There are many ways to pay money to our restoren.</p>
                    </div>
                </div>
                <div className="flex py-4 items-center justify-center md:justify-start gap-4 mb-6">
                    <FaTruckMoving className="text-3xl text-red-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Get delivery within 50 mins</h1>
                        <p className="text-sm text-gray-700">If you ordered our food.after fifty miniute you will get</p>
                    </div>
                </div>
                <div className="flex py-4 items-center justify-center md:justify-start gap-4 mb-6">
                    <FcBusinessman className="text-3xl text-red-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Service Provider</h1>
                        <p className="text-sm text-gray-700">We Have good service provide,who are the best well as</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    );
};

export default Delivery;
