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
import { Helmet } from "react-helmet";

const BannerSlider = () => {
  return (
   <div>
          <Helmet>
  <title>
  BannerSlider
  </title>
</Helmet>
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
                <span className="text-white">Best Catering Service in SpicyBites</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                <button className="bg-blue-600 px-8 py-3 text-white   rounded-lg hover:bg-red-600 transition duration-300">
                      All Food
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
                <span className="text-white">Best Catering Service in SpicyBites</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                <button className="bg-blue-600 px-8 py-3 text-white   rounded-lg hover:bg-red-600 transition duration-300">
                      All Food
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
              src="https://i.ibb.co.com/s3Qpz8B/banner1.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-6xl font-mono font-extralight text-white">
              Hot, Spicy & Delicious <br />
                <span className="text-white">Best Catering Service in SpicyBites</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                <button className="bg-blue-600 px-8 py-3 text-white   rounded-lg hover:bg-red-600 transition duration-300">
                      All Food
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
                <span className="text-white">Best Catering Service in SpicyBites</span>
              </p>
              <div className="text-center mt-8">
                <Link to="/allfoods">
                <button className="bg-blue-600 px-8 py-3 text-white   rounded-lg hover:bg-red-600 transition duration-300">
                      All Food
                    </button>
                </Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
   </div>
  );
};

export default BannerSlider;
