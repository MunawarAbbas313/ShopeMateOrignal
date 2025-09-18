import { Data } from "../assets/Catgores/Data";
import { FaRegCircle } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { toggleTheme } from "../Redux/ThemeSlice";
import FeatureCrads from "../Compnents/FeatureCrads";
import Typesofvar from "../Compnents/TypesofVar";
import TopProducts from "../Compnents/TopProdcuts";
import Footer from "../Compnents/Footer";

function Home(){
    const darkMode = useSelector((state)=>state.theme.darkMode)
    return(
       <>
        <div className="flex flex-col md:flex-row justify-around items-center p-6 overflow-hidden shadow-lg rounded-lg">
           <div className={`left rounded-2xl shadow-lg w-full md:w-[300px] h-auto bg-gray-700 mb-3 md:mb-0`}>
  <h2
    className={`p-4 text-xl font-semibold font-serif text-center rounded-t-2xl 
      ${darkMode ? "bg-gray-800 text-white" : "bg-red-500 text-white"}`}
  >
    Shop by Categories
  </h2>

  <ul className="flex flex-col gap-3 p-6 text-white font-medium text-lg">
    {Data.map((item, index) => (
      <li
        key={index}
        className="p-3 flex items-center gap-3 rounded-lg border border-transparent 
                   hover:border-red-400 hover:bg-red-0 dark:hover:bg-gray-800 
                   cursor-pointer transition-all"
      >
        <FaRegCircle className={`${darkMode? "text-green-700":"text-red-600"}`}/>
        {item}
      </li>
    ))}
  </ul>
</div>

         <div className="right relative w-full md:w-[70%] h-[500px]">
  <img 
    src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg" 
    alt="" 
    className="w-full h-full object-cover rounded-lg"
  />

  {/* Overlay Centered Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h3 className={`text-lg md:text-3xl font-bold ${darkMode ? "text-white": "text-black"}`}>
      Your Own <span className="text-purple-600">| e-Shop</span>
    </h3>

    <h1 className="text-2xl md:text-4xl font-bold text-white mt-2">
      Welcome to <span className="text-black">ShopeMate</span>
    </h1>

    <h2 className="text-base md:text-2xl text-gray-800 mt-2 font-semibold">
      Millions of Products
    </h2>

    <button className="mt-4 px-8 py-2 text-xl font-semibold  bg-red-400 text-white rounded-lg hover:bg-red-600 transition-all">
      Shop Now
    </button>
  </div>
</div> 
 </div>
 <FeatureCrads/>
 <Typesofvar/>
 <TopProducts/>
 <Footer/>
       
       </>
        

    )
}
export default Home;