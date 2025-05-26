import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

/// MAIN LANDING PAGE ///

const HeroSection = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleShowsClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      document.querySelector("#tour").scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleMusicIconClick = (e, url) => {
    e.preventDefault();
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#f6f3ed] mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <br></br>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-gray-300">
              <TypeAnimation
                sequence={[
                  "Output Advertising",
                  3000,
                  "Finding",
                  1000,
                  "Your",
                  1000,
                  "Audience.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  fontFamily: "Kallisto Lined",
                  display: "inline-block",
                  color: "#c0c0c0",
                }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div className="text-[#717477] text-base sm:text-lg mb-6 lg:text-xl determination-mono-font">
            advertising_agency /// world_wide_web
            <div className="mt-4 flex justify-center sm:justify-start">

            </div>
          </div>

          <div>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="contact-button px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-[#121212] font-bold determination-mono-font transition-all duration-300 ease-in-out relative overflow-hidden transform hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10">Contact Us</span>
            </a>

            {/* <a
              href="/pdfs/Expansion_Project_EPK.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#c0c0c0] to-secondary-900 hover:bg-slate-800 text-[#f6f3ed] mt-3 transition duration-500 ease-in-out"
              download="Expansion Project EPK"
              target="_blank"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 determination-mono-font transition duration-500 ease-in-out">
                Download EPK
              </span>
            </a> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="rounded-full w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] relative overflow-hidden 
            transition-all duration-700 ease-in-out 
            bg-transparent
            hover:shadow-[0_0_25px_#c0c0c0,0_0_50px_rgba(192,192,192,0.15)] 
            hover:translate-y-[-10px] 
            cursor-pointer 
            active:translate-y-[4px]
            active:scale-[0.97]
            active:shadow-[inset_0_0_15px_rgba(192,192,192,0.3)]"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-transparent">
              <Image
                src="/images/mainCPGv2.webp"
                alt="Expansion Project main band photo"
                className="rounded-full object-cover hero-image 
                transition-all duration-700 ease-in-out 
                hover:scale-105
                active:scale-95
                active:shadow-inner"
                width={230}
                height={230}
                sizes="(max-width: 1024px) 230px, 330px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
