

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section (Logo, Address, Social Media) */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div className="flex gap-4">
            <img
            src="https://i.ibb.co.com/VBb7Bxh/food-Items.jpg"
            alt="Cooked Logo"
            className="w-14 h-14 rounded "
          />
          <p className="text-3xl font-bold">SpicyBites</p>
            </div>
          <p className="mb-6">
            4200 Hamill Avenue, San Diego, California 92109.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Middle Section (Links) */}
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-between mb-6">
          {/* Company */}
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  We are hiring
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Business Accounts
                </a>
              </li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Email Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help & FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Make a Return
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (Contact & Chef Image) */}
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h3 className="text-yellow-500 font-bold mb-4">Contact</h3>
          <p className="mb-2">
            <i className="fa fa-phone-alt mr-2"></i> : 01820339433
          </p>
          <p className="mb-4">
            <i className="fa fa-envelope mr-2"></i>: adnanmahmud3394@gmail.com
          </p>
          <img
            src="https://i.ibb.co.com/4WRtWFm/shafe.jpg"
            alt="Chef Image"
            className="w-48 bg-lime-700 rounded"
          />
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10">
        <p>© Copyright 2024 Cooked.</p>
      </div>
    </footer>
  );
};

export default Footer;
