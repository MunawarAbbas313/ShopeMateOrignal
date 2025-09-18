import { CardData } from "../Features/CardsData";
import { useSelector } from "react-redux";

function FeatureCards() {
    const darkMode = useSelector((state)=>state.theme.darkMode);
  return (
    <section className="py-16 px-6 bg-gray-50transition-colors duration-300 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-green-600">  Our</span> Features
        </h2>

        {/* Grid wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">

          {CardData.map((data, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl  shadow-lg
                         flex flex-col items-center text-center h-full
                         border cursor-pointer ${darkMode ? "bg-gray-900" : "text-black"}
                         hover:shadow-xl hover:-translate-y-3 hover:border-red-400
                         transition-all duration-300 ease-out group`}
            >
              {/* Icon */}
              <span className="text-5xl text-red-500 mb-6 transform group-hover:scale-125 transition-transform duration-300">
                {data.icon}
              </span>

              {/* Heading */}
              <h3 className="text-xl font-semibold  mb-3">
                {data.heading}
              </h3>

              {/* Paragraph */}
              <p className="text-sm leading-relaxed ">
                {data.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
