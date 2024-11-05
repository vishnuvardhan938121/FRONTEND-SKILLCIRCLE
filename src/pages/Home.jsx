import React, { useEffect, useState } from "react";
import landing from "../assets/images/skill-circle-landing.jpg";
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import TopRatedCarousel from "../components/TopRatedCarousel";
import Header from "../components/Header";
import Features from "../components/Features";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Header isScrolled={isScrolled} />
        <section
          className="box relative flex flex-col items-center justify-center min-h-screen text-white text-center px-10 py-28"
          style={{
            backgroundImage: `url(${landing})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-shadow">
            Skill Circle
          </h1>
          <h3 className="text-xl md:text-2xl mb-8">
            Your Service Hub, Your Way
          </h3>

          <a
            href="#"
            className="boxBtn bg-transparent border-4 border-white rounded-full px-6 py-3 uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact Us
          </a>
        </section>
      </div>

      <TopRatedCarousel />

      <Features />
      <Reviews />
      <Footer />

      {/* <Contact/> */}
    </>
  );
};

export default Home;
