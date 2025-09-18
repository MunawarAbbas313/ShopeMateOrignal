import { FaStar, FaRegStar, FaPlus } from "react-icons/fa";

export const Products = [
  {
    id:1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlFmQ7La07-wwasBpC1mtUFnuaUYphLqe5w&s",
    title: "Wireless Headphones",
    price: "59.99",
    ratings: (
      <>
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </>
    ),
    addtocarticon: <FaPlus className="text-green-600 text-xl" />,
  },
  {
    id:2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4obsjY9G4SIC3B9OqgthirmGG8BtqmYz-w&s",
    title: "Smart Watch",
    price: "120.00",
    ratings: (
      <>
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </>
    ),
    addtocarticon: <FaPlus className="text-green-600 text-xl" />,
  },
  {
    id:3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk415WWLNWMlKc04b-6hwyUoL4J6pC45I1g&s",
    title: "Sneakers",
    price: "89.50",
    ratings: (
      <>
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </>
    ),
    addtocarticon: <FaPlus className="text-green-600 text-xl" />,
  },
  {
    id:4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBrXZHXA6_DNTzUo4pW5gECGeQK_svfHSrw&s",
    title: "Leather Backpack",
    price: "75.00",
    ratings: (
      <>
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </>
    ),
    addtocarticon: <FaPlus className="text-green-600 text-xl" />,
  },
  {
    id:5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlol7ypQZemD1ny9VLW0wW6F7kxheDANTDIA&s",
    title: "Sunglasses",
    price: "40.00",
    ratings: (
      <>
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </>
    ),
    addtocarticon: <FaPlus className="text-green-600 text-xl" />,
  },
  {
    id:6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73tJL50I-mNa4R2aRCNvT6BiO-U5jDmu7Hg&s",
    title: "Perfumes",
    price: "30.00",
    ratings: (
      <>
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
        <FaRegStar className="text-yellow-400" />
      </>
    ),
    addtocarticon: <FaPlus className="text-green-600 text-xl" />,
  },
];
