import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-screen-xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Company Icon & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold mb-3">DemoLogo</div>
          <div className="flex space-x-4">
            <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer" size={24} />
            <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" size={24} />
            <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" size={24} />
            <FaLinkedin className="text-blue-600 hover:text-blue-800 cursor-pointer" size={24} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-400">123 Street, City, Country</p>
          <p className="text-gray-400">Email: contact@demo.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 text-gray-400 text-sm text-center md:text-left">
        <p>&copy; 2024 Demo Company. All rights reserved.</p>
        <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
