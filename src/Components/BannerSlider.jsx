// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={200}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="relative ">
            <img
              className="w-full    mx-auto rounded"
              src="https://i.ibb.co.com/s3Qpz8B/banner1.jpg"
              alt=""
              
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-6xl font-mono font-extralight text-white">
              Hot, Spicy & Delicious <br />
                <span className="text-white">Best Catering Service in NYC</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                <button className="mt-4 bg-blue-600 px-8 py-4 rounded text-white 
              transition duration-200  text-xl ease-in-out hover:bg-black">
                All Foods
              </button>
                </Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full  mx-auto rounded mb-6"
              src="https://i.ibb.co.com/1qLHF3V/banner2.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-6xl font-mono font-extralight text-white">
              Hot, Spicy & Delicious <br />
                <span className="text-white">Best Catering Service in NYC</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                <button className="mt-4 bg-violet-700 px-8 py-4 rounded text-white 
              transition duration-200  text-xl ease-in-out hover:bg-black">
                All Foods
              </button>
                </Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full   mx-auto rounded mb-6"
              src="https://i.ibb.co.com/q5Hxz6M/banner3.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-6xl font-mono font-extralight text-white">
              Hot, Spicy & Delicious <br />
                <span className="text-white">Best Catering Service in NYC</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                        View All Food
                    </button>
                </Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full  mx-auto rounded mb-6"
               src="https://i.ibb.co.com/1qLHF3V/banner2.jpg"
              alt=""
            />
          <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-6xl font-mono font-extralight text-white">
              Hot, Spicy & Delicious <br />
                <span className="text-white">Best Catering Service in NYC</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                        View All Food
                    </button>
                </Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default BannerSlider;
