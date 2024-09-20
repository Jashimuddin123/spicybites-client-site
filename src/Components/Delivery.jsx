import { IoMdRestaurant } from "react-icons/io";


import { GiNotebook } from "react-icons/gi";

import { FaTruckMoving } from "react-icons/fa";

const Delivery = () => {
    return (
       <div>
        <h1 className="text-4xl font-bold text-center">Fastest Delivery</h1>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-lg">
            {/* Image Section */}
            <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                <img 
                    src="https://i.ibb.co.com/4WRtWFm/shafe.jpg" 
                    alt="Delicious Burger" 
                    className="w-11/12 md:w-9/12 h-auto rounded-lg"
                />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 mb-6 text-center md:text-left px-4 md:px-6">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <IoMdRestaurant className="text-3xl text-red-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Order food from menu</h1>
                        <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, fugit.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <GiNotebook className="text-3xl text-red-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Pay your food bill</h1>
                        <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, fugit.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <FaTruckMoving className="text-3xl text-red-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Get delivery within 50 mins</h1>
                        <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, fugit.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <IoMdRestaurant className="text-3xl text-red-500" />
                    <div>
                        <h1 className="text-lg font-semibold">Order food from menu</h1>
                        <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, fugit.</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Delivery;
