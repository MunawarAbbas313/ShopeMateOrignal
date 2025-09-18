import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/ThemeSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import LoginPage from "../Authentication/LoginPage";
import { setSearch } from "../Redux/SearchSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { clearSUser } from "../Redux/UserSlice";  // ✅ import your reducer action

function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.user);  // ✅ get logged-in user
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const HandleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(setSearch(query));
    navigate("/search");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  // ✅ Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearSUser());
      navigate("/"); // go home after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-between items-center p-4 shadow-lg ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold font-sans cursor-pointer">
          Shop<span className="text-green-600">Mate</span>
        </h2>

        {/* Search Bar (desktop) */}
        <div className="hidden md:flex relative w-1/2 ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Product ....."
            className={`w-full px-5 py-2 rounded-full outline-none font-medium transition-all duration-300 ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
            }`}
          />
          <CiSearch
            onClick={HandleSearch}
            className="absolute right-4 top-2 text-2xl cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <PiShoppingCart className="text-2xl md:text-3xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs md:text-sm font-bold rounded-full px-1.5">
              {cart.totalQuantity}
            </span>
          </div>

          {/* Theme Toggle */}
          <div
            onClick={() => dispatch(toggleTheme())}
            className="cursor-pointer text-2xl md:text-3xl"
          >
            {darkMode ? (
              <MdLightMode className="text-yellow-300" />
            ) : (
              <MdDarkMode className="text-gray-800" />
            )}
          </div>

          {/* ✅ Auth Buttons */}
          <div className="hidden sm:flex gap-2 text-sm md:text-lg font-semibold ">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-red-600 cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className={`${darkMode ? "text-gray-200" : "text-green-700"} cursor-pointer`}
                >
                  Login |
                </button>
                <button
                  onClick={() => navigate("/Signup")}
                  className={`${darkMode ? "text-yellow-200" : "text-blue-700"} cursor-pointer`}
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className={`sm:hidden flex flex-col gap-3 px-4 py-3 shadow-lg mt-3 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="text-red-600 text-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setShowLogin(true);
                  setMenuOpen(false);
                }}
                className={`${darkMode ? "text-gray-200" : "text-green-700"} text-lg`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/Signup");
                  setMenuOpen(false);
                }}
                className={`${darkMode ? "text-yellow-200" : "text-blue-700"} text-lg`}
              >
                Register
              </button>
            </>
          )}
        </div>
      )}

      {/* Bottom Links */}
      <div
        className={`flex overflow-x-auto md:overflow-visible justify-start md:justify-around items-center gap-5 p-3 w-full font-serif mt-5 md:mt-0 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `md:text-xl font-semibold px-3 py-1 ${
              isActive
                ? "border-b-2 border-green-600"
                : darkMode
                ? "text-black"
                : "text-green-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `md:text-xl font-semibold px-3 py-1 ${
              isActive
                ? "border-b-2 border-green-600"
                : darkMode
                ? "text-yellow-700"
                : "text-blue-700"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Trending"
          className={({ isActive }) =>
            `md:text-xl font-semibold px-3 py-1 ${
              isActive
                ? "border-b-2 border-green-600"
                : darkMode
                ? "text-black"
                : "text-green-700"
            }`
          }
        >
          Trending
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `md:text-xl font-semibold px-3 py-1 ${
              isActive
                ? "border-b-2 border-green-600"
                : darkMode
                ? "text-yellow-700"
                : "text-blue-700"
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <LoginPage
          onClose={() => setShowLogin(false)}
          onSwitch={() => setShowLogin(false)}
        />
      )}
    </>
  );
}

export default Navbar;
