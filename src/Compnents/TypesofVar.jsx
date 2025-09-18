import { TypesOf } from "../assets/Catgores/Types";
import { useSelector } from "react-redux";

function Typesofvar() {
    const darkMode = useSelector((state)=>state.theme.darkMode);
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 `}>
      {TypesOf.map((cat, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden shadow-lg group"
        >
          {/* Image */}
          <img
            src={cat.img}
            alt="category"
            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* Content */}
          <div className="absolute inset-0 flex justify-end items-center pr-6">
            <div className="text-right space-y-3">
              <h2 className={`text-3xl font-serif font-bold drop-shadow-lg ${darkMode ? "text-black":"text-white"}`}>
                {cat.name}
              </h2>
              <button className="px-5 py-2 bg-red-400  text-white font-semibold cursor-pointer rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                {cat.btn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Typesofvar;
