import React from "react";
import { motion } from "framer-motion";

/// TAB BUTTON ///

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-[#808080]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold hover:text-black ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#c0c0c0] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
