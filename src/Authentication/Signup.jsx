import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const Nameref = useRef();
  const EmailRef = useRef();
  const passwordREf = useRef();
  const confrimPass = useRef();

  const ValidateForm = () => {
    const name = Nameref.current.value.trim();
    const email = EmailRef.current.value.trim();
    const password = passwordREf.current.value.trim();
    const Cpassword = confrimPass.current.value.trim();

    if (!name) {
      toast.error("Enter a correct name");
      return false;
    }

    if (!email.includes("@")) {
      toast.error("Invalid Email");
      return false;
    }

    if (password.length < 8 || password !== Cpassword) {
      toast.error("Password does not match. It should be at least 8 characters long");
      return false;
    }

    return true;
  };

  const HandleSignup = async (email, password) => {
    try {
      const userDetails = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up: ", userDetails.user);
      toast.success("Signup Successful 🎉");
      navigate("/"); // move to home page after signup
    } catch (error) {
      console.log("Signup error:", error.message);
      toast.error(error.message);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const valid = ValidateForm();

    if (valid) {
      const email = EmailRef.current.value.trim();
      const password = passwordREf.current.value.trim();
      HandleSignup(email, password);
    }
  };

  return (
    <div
      className={`fixed inset-0 ${
        darkMode ? "bg-black" : "bg-gray-300"
      } bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50`}
    >
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-96 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer"
        >
          ✖
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-green-600 dark:text-green-400">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            ref={Nameref}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            ref={EmailRef}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordREf}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confrimPass}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
