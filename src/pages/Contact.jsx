import { useState } from "react";
import { FiMail, FiPhone, FiUser, FiMessageSquare } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { ImSpinner8 } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "General Inquiry",
    "Technical Support",
    "Business Partnership",
    "Feedback",
    "Other",
  ];

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email format"
          : "";
      case "phone":
        return value && !/^\d{10}$/.test(value.replace(/[^0-9]/g, ""))
          ? "Invalid phone number"
          : "";
      case "subject":
        return value.trim() === "" ? "Subject is required" : "";
      case "message":
        return value.trim() === "" ? "Message is required" : "";
      case "category":
        return value === "" ? "Please select a category" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          category: "",
        });
      } catch (error) {
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
    <Header isScrolled={true}/>
    <div className="min-h-screen mt-[40px] bg-gradient-to-br from-theme-color-base to-theme-color-neutral p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8">
        <h1 className="text-4xl font-bold text-theme-color-primary text-center mb-4">
          Contact Us
        </h1>
        <p className="text-theme-color-secondary text-center mb-8">
          We'd love to hear from you. Please fill out the form below and we'll
          get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FiUser className="absolute top-3 left-3 text-theme-color-secondary" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                  errors.name ? "border-red-500" : "border-theme-color-neutral"
                } focus:outline-none focus:ring-2 focus:ring-theme-color-primary transition-all`}
                aria-label="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-theme-color-secondary" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                  errors.email ? "border-red-500" : "border-theme-color-neutral"
                } focus:outline-none focus:ring-2 focus:ring-theme-color-primary transition-all`}
                aria-label="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <FiPhone className="absolute top-3 left-3 text-theme-color-secondary" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone (Optional)"
                className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                  errors.phone ? "border-red-500" : "border-theme-color-neutral"
                } focus:outline-none focus:ring-2 focus:ring-theme-color-primary transition-all`}
                aria-label="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="relative">
              <FiMessageSquare className="absolute top-3 left-3 text-theme-color-secondary" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                  errors.subject
                    ? "border-red-500"
                    : "border-theme-color-neutral"
                } focus:outline-none focus:ring-2 focus:ring-theme-color-primary transition-all`}
                aria-label="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div className="relative">
              <BiCategory className="absolute top-3 left-3 text-theme-color-secondary" />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                  errors.category
                    ? "border-red-500"
                    : "border-theme-color-neutral"
                } focus:outline-none focus:ring-2 focus:ring-theme-color-primary transition-all`}
                aria-label="Category"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className={`w-full p-4 rounded-md border ${
                  errors.message
                    ? "border-red-500"
                    : "border-theme-color-neutral"
                } focus:outline-none focus:ring-2 focus:ring-theme-color-primary transition-all`}
                aria-label="Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[200px] bg-black  text-white py-3 rounded-md hover:bg-theme-color-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-primary focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <ImSpinner8 className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                "Submit Message"
              )}
            </button>
          </form>

          <div className="bg-black bg-opacity-5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-theme-color-primary mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <IoLocationSharp className="text-2xl text-theme-color-primary mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-theme-color-primary-dark">
                    Our Location
                  </h3>
                  <p className="text-theme-color-secondary mb-3">
                    Keshav Memorial Institute Of Technology
                    <br />
                    Narayanguda
                    <br />
                    Hyderabad, 500029
                  </p>
                  <div className="w-full h-48 rounded-lg overflow-hidden shadow-md">
                    <div className="google-map-code max-lg:w-full overflow-y-hidden overflow-x-hidden border-2 border-gray-300 rounded-3xl">
                      <iframe
                        src={`https://www.google.com/maps?q=${"Kmit,Narayanguda"}&output=embed`}
                        width="100%"
                        height="300px"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="maps"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiPhone className="text-2xl text-theme-color-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-theme-color-primary-dark">
                    Phone
                  </h3>
                  <p className="text-theme-color-secondary">
                    +91 7075451131
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiMail className="text-2xl text-theme-color-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-theme-color-primary-dark">
                    Email
                  </h3>
                  <p className="text-theme-color-secondary">
                    bhavaniprasad0141@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
