import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Redux/CartSlice";
import Footer from "./Footer";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function CartProduct() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
   const darkMode = useSelector((state)=>state.theme.darkMode);
   const user = useSelector((state)=> state.auth.user);
   const navigate = useNavigate();

   const HandleCheckOut = ()=>{
    if(user){
         navigate("/checkout")
    }
    else{
      toast.error("Please Login First");
      navigate("/login");
    }
   }
  return (
    <>
      <div className="px-4 sm:px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-center">
          Your Cart
        </h2>

        {cart.items.length === 0 ? (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-6">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col items-center p-6 border rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-30${darkMode? "bg-gray-600":"bg-white"}`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl border"
                />

                {/* Info */}
                <div className="flex-1 px-4 mt-4 text-center">
                  <h3 className="font-semibold text-lg md:text-xl line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg md:text-xl mt-1">
                    ${item.price}
                  </p>
                  <p className="mt-1">Quantity: {item.quantity}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-1 md:gap-2 mt-4">
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-3 py-2 md:px-4 md:py-2 bg-green-600 hover:bg-green-700 cursor-pointer text-white md:rounded-lg font-semibold transition-all shadow-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-3 py-2 md:px-4 md:py-2 bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white rounded-lg font-semibold transition-all shadow-md"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-3 py-2 md:px-4 md:py-2 bg-red-600 hover:bg-red-700 cursor-pointer text-sml md:text-lg text-white rounded-lg font-semibold transition-all shadow-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Section */}
        {cart.items.length > 0 && (
          <div className="mt-8 p-6 flex flex-col md:flex-row justify-between items-center border-t-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-inner">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Total Quantity: {cart.totalQuantity}
            </h3>
            <h3 className="md:text-3xl font-extrabold text-green-600 dark:text-green-400 mt-3 md:mt-0">
              Total Price: ${cart.totalPrice.toFixed(2)}
            </h3>
          </div>
        )}

        {/* Checkout Button */}
        {cart.items.length > 0 && (
          <div className="flex justify-center mt-6 mb-12">
            <button
            onClick={()=>HandleCheckOut()}
              className="flex items-center gap-3 bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
              <FaShoppingCart className="w-5 h-5" />
              Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CartProduct;
