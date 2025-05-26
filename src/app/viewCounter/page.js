"use client";
import { useEffect, useState } from "react";

const ViewCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load count from localStorage if available
    const savedCount = localStorage.getItem("viewCount");
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
    // Increment count
    const newCount = (parseInt(savedCount) || 0) + 1;
    setCount(newCount);
    localStorage.setItem("viewCount", newCount.toString());
  }, []);

  return (
    <span className="text-[#c0c0c0]">
      {count !== undefined ? `${count}` : "(loading...)"}
    </span>
  );
};

export default ViewCounter;
