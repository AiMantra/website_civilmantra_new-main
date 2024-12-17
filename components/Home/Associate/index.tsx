import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";


interface ImageData {
  imglogo: string;
}

const Associate = () => {
  const [images, setImages] = useState<ImageData[]>([]); 
  const [scrollSpeed, setScrollSpeed] = useState(20); 

 
  useEffect(() => {
    const fetchImages = async () => {
      try {
        
        const response = await axios.get("https://cipl.aimantra.info/website/clientLogo/");
        setImages(response.data); 
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(); // Call the fetch function when the component mounts

    // Update scroll speed based on screen size
    const updateScrollSpeed = () => {
      if (window.innerWidth <= 768) {
        setScrollSpeed(15); // Increase speed for smaller screens
      } else if (window.innerWidth <= 1024) {
        setScrollSpeed(18); // Medium speed for mid-sized screens
      } else {
        setScrollSpeed(20); // Normal speed for larger screens
      }
    };

    updateScrollSpeed(); // Check on initial load
    window.addEventListener("resize", updateScrollSpeed); // Check on resize

    return () => window.removeEventListener("resize", updateScrollSpeed);
  }, []);

  return (
    <div className="overflow-hidden pb-8 md:pb-12">
      <motion.div
        className="flex space-x-4 md:space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: scrollSpeed,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Create an infinite loop effect by repeating the image array */}
        {[...images, ...images].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-3xl my-8 md:my-16 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center"
          >
            <Image
              src={item.imglogo}
              alt="Associate logo"
              width={200}
              height={200}
              className="object-contain w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Associate;
