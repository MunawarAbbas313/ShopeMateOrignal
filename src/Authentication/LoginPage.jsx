import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage({ onClose }) {
  const navigate = useNavigate();

  const userEmail = useRef();
  const userPassword = useRef();

  function ValidateLogin() {
    const email = userEmail.current.value.trim();
    const password = userPassword.current.value.trim();

    if (!email || !email.includes("@")) {
      toast.error("Invalid Email");
      return false;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }
    return true;
  }

  const HandleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully 🎉");

      if (onClose) onClose();
      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials ❌");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ValidateLogin()) {
      const email = userEmail.current.value.trim();
      const password = userPassword.current.value.trim();
      HandleLogin(email, password);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className="relative bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            ref={userEmail}
            placeholder="Email"
            className="px-4 py-2 rounded-lg border outline-none"
          />
          <input
            type="password"
            ref={userPassword}
            placeholder="Password"
            className="px-4 py-2 rounded-lg border outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
