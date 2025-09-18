import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Globe,
  ShieldCheck,
  Truck,

  RefreshCcw,
} from "lucide-react";
import Footer from "../Compnents/Footer";

function About() {
  const dark = useSelector((state) => state.theme.dark);

  // Stats Counter
  const [stats, setStats] = useState({ orders: 0, customers: 0, products: 0 });

  useEffect(() => {
    let o = 0,
      c = 0,
      p = 0;
    const interval = setInterval(() => {
      o < 12000 && (o += 120);
      c < 8500 && (c += 85);
      p < 3500 && (p += 35);
      setStats({ orders: o, customers: c, products: p });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    { name: "Ayesha K.", text: "Amazing quality and fast delivery!" },
    { name: "Ali R.", text: "Best shopping experience I’ve ever had." },
    { name: "Fatima S.", text: "Shopemate never disappoints." },
    { name: "Hamza M.", text: "Customer support was excellent." },
    { name: "Sana L.", text: "I always find the latest fashion here." },
  ];

  return (
    <div
      className={``}
    >
      {/* Hero */}
      <section className="text-center py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-indigo-500">Shopemate</span>
        </h1>
        <p className="text-lg opacity-80 mb-6">
          Your trusted e-commerce store for fashion, lifestyle, and more.
        </p>
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition">
          Shop Now
        </button>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-16 max-w-6xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=800"
          alt="Our Story"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="opacity-80 leading-relaxed">
            At Shopemate, we started with a mission to make shopping simple,
            affordable, and enjoyable. Today, we bring thousands of products to
            happy customers worldwide with fast delivery and unmatched quality.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-black">
          {[
            { icon: Globe, title: "Global Reach", desc: "We deliver worldwide." },
            { icon: ShieldCheck, title: "Trust", desc: "Secure shopping experience." },
            { icon: ShoppingBag, title: "Quality", desc: "Only the best products." },
            { icon: Truck, title: "Fast Delivery", desc: "Get your orders quickly." },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow hover:shadow-xl transition ${
                dark ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <item.icon className="w-10 h-10 mb-3 text-indigo-500" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-75">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500", title: "Men" },
            { img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500", title: "Women" },
            { img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500", title: "Kids" },
            { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", title: "Accessories" },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-lg  text-black"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">
                  {cat.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Shop With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6  text-black">
          {[
            { icon: Truck, title: "Fast Delivery", desc: "Quick and reliable shipping." },
             { icon: Truck, title: "Fast Delivery", desc: "Quick and reliable shipping." },
            { icon: RefreshCcw, title: "Easy Returns", desc: "Hassle-free return policy." },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl text-center shadow hover:shadow-xl transition ${
                dark ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <item.icon className="w-10 h-10 mb-3 text-indigo-500 mx-auto" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-75">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">{stats.orders}+</h3>
            <p className="opacity-70">Orders Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">{stats.customers}+</h3>
            <p className="opacity-70">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">{stats.products}+</h3>
            <p className="opacity-70">Products Available</p>
          </div>
        </div>
      </section>

      {/* Floating Reviews */}
      <section className="px-6 py-20 max-w-6xl mx-auto relative overflow-hidden">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 relative text-black">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg w-full md:w-2/3 mx-auto animate-float${
                (idx % 2) + 1
              } ${
                dark ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <p className="italic opacity-80 mb-3">“{review.text}”</p>
              <h4 className="font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
        <style>
          {`
            @keyframes float1 {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes float2 {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(10px); }
            }
            .animate-float1 { animation: float1 4s ease-in-out infinite; }
            .animate-float2 { animation: float2 5s ease-in-out infinite; }
          `}
        </style>
      </section>

      {/* Newsletter */}
      <section
        className={`px-6 py-16 max-w-4xl mx-auto text-center rounded-2xl shadow text-black border ${
          dark ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Join 10,000+ Shoppers Today
        </h2>
        <p className="opacity-80 mb-6">
          Subscribe for exclusive deals, early access, and style tips.
        </p>
        <div className="flex max-w-md mx-auto ">
          <input
            type="email"
            placeholder="Enter your email"
            className={`flex-1 p-3 rounded-l-xl outline-none ${
              dark ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          />
          <button className="px-6 py-3 bg-indigo-500 text-white rounded-r-xl hover:bg-indigo-600 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Trusted By */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">We Accept</h2>
        <div className="flex justify-center gap-8 opacity-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
            alt="MasterCard"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Cash.svg"
            alt="COD"
            className="h-10"
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;
