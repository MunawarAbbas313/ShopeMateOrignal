import { ProdcutsForShop } from "../assets/Prodcuts/Shop";
import { useSelector } from "react-redux";
import Footer from "../Compnents/Footer";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Shop(){
    const darkMode = useSelector((state)=>state.theme.darkMode)
    const dispatch = useDispatch();

    const HanldeaddToCart = (item)=>{
      dispatch(addToCart(item));
      toast.success(`${item.title} added to Cart`)
    }
    return(
        <>
        <div className="px-3 sm:px-6 md:px-12 py-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center underline decoration-4 underline-offset-4">
                Top Products
              </h1>
        
              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {ProdcutsForShop.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border hover:border-red-400 ${
                      darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
        
                    {/* Content */}
                    <div className="p-4 flex flex-col justify-between min-h-[150px]">
                      <div>
                        <h2 className="text-base md:text-lg font-semibold mb-1 line-clamp-1">
                          {item.title}
                        </h2>
                        <h3 className="text-lg md:text-xl font-bold text-yellow-600">
                          {item.price}
                        </h3>
                      </div>
        
                      {/* Rating + Button */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1 text-yellow-500 text-sm">
                          {item.ratings}
                        </div>
        
                        <button
                          onClick={()=>HanldeaddToCart(item)}
                        className="flex items-center gap-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium shadow-md transition-all">
                          {item.addtocarticon}
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer/>
        
        </>
    )
}
export default Shop;