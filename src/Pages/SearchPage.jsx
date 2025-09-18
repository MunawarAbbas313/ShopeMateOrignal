import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProdcutsForShop } from "../assets/Prodcuts/Shop";
import Footer from "../Compnents/Footer";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";
function SearchPage() {
  const term = useSelector((state) => state.search.term);

  const filteredProducts =
  term.trim() === ""
    ? []
    : ProdcutsForShop.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );

  const darkMode = useSelector((state)=> state.theme.darkMode);

  const dispatch = useDispatch();

  const HandleaddTocart = (p)=>{
    dispatch(addToCart(p));
    toast(`${p.title} added Sucessfully `);
  }

  return (
    <>
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Search Results for <span className="text-green-600">"{term}"</span>
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-2xl overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 flex items-center justify-center  overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-44 w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Floating Badge */}
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
                  ⭐ {p.ratings}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col gap-4">
                <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>

                <div className="flex items-center justify-between">
                  <p className="font-bold text-xl">
                    ${p.price}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    In Stock
                  </span>
                </div>

                {/* Button */}
                <button 
                  onClick={()=>HandleaddTocart(p)}
                className="mt-2 cursor-pointer w-full py-2 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
         <div className="flex flex-col items-center justify-center h-64 text-center">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          No Results Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          We couldn’t find anything for{" "}
          <span className="font-medium text-indigo-600">"{term}"</span>
        </p>
      </div>
    </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default SearchPage;
