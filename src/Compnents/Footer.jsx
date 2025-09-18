import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Footer() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [email , setEmail] = useState("");

  // Base text colors depending on mode
  const textColor = darkMode ? "text-gray-200" : "text-gray-700";
  const headingColor = darkMode ? "text-white" : "text-gray-900";

  const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
 const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Enter a valid Email ")
      return;
    }
    else{
        toast.success("Done")
        setEmail("");
    }
}


  return (
    <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} pt-12 pb-6 px-6 sm:px-10`}>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-700 pb-10">
        
        {/* Logo + About */}
        <div>
          <h2 className={`text-2xl font-bold ${headingColor}`}>
            Shop <span className="text-green-600">Mate</span>
          </h2>
          <p className={`mt-3 text-sm ${textColor}`}>
            Elevating your shopping experience with top quality products, fast delivery, 
            and unbeatable support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Quick Links</h3>
          <ul className={`space-y-2 text-sm ${textColor}`}>
            <li><Link to="#" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/Trending" className="hover:text-blue-600 transition">Shop</Link></li>
            <li><Link to="/About" className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link to="/Contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Customer Care</h3>
          <ul className={`space-y-2 text-sm ${textColor}`}>
            <li><a href="#" className="hover:text-blue-600 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Stay Updated</h3>
          <p className={`text-sm mb-3 ${textColor}`}>
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <form onSubmit={handleSubmit} className="flex">
            <input 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email" 
              placeholder="Enter your email" 
              className={`w-full px-3 py-2 rounded-l-lg outline-none  ${darkMode ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-700 placeholder-gray-500"} `}
            />
            <button 
              type="submit" 
              
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between mt-6 text-sm ${textColor}`}>
        <p>
          © {new Date().getFullYear()} Shop <span className="text-green-600">Mate</span>. All rights reserved.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <a href="#" className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} hover:bg-blue-600 hover:text-white transition`}><FaFacebookF /></a>
          <a href="#" className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} hover:bg-blue-400 hover:text-white transition`}><FaTwitter /></a>
          <a href="#" className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} hover:bg-pink-500 hover:text-white transition`}><FaInstagram /></a>
          <a href="#" className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} hover:bg-blue-700 hover:text-white transition`}><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
