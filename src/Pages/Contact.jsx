import { useState } from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";
import Footer from "../Compnents/Footer";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-16">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 border-b-2 pb-4">
          Contact <span className="text-green-600">Us</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <span className="text-lg">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <span className="text-lg">contact@yourdomain.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="text-lg">Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">
              <a
                href="#"
                className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-pink-500 text-white hover:scale-110 transition-transform shadow-md"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-blue-800 text-white hover:scale-110 transition-transform shadow-md"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Map */}
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.123456!2d73.054!3d33.684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df953e4f12345%3A0xabcdef123456789!2sIslamabad!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-lg mt-6"
                title="map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Let’s Build Something Together</h3>
          <p className="mb-6">
            Have an idea or project in mind? Reach out and let’s make it happen!
          </p>
          <a
            href="mailto:contact@yourdomain.com"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
