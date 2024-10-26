import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const journeydata = [
    {
        year: "16",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "17",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "18",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "19",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "20",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "21",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "22",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "23",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    },
    {
        year: "24",
        image: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
        info: "We achieved this on year",
    }
]

const Journey = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollUp = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ top: -200, behavior: "smooth" });
        }
    };

    const scrollDown = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ top: 200, behavior: "smooth" });
        }
    };

    return (
        <>
            <div>
                <h1 className="unihead my-20"> Our Achievements</h1>
            </div>
            <div
                className="overflow-hidden h-[100vh] flex mb-20 bg-black"
                style={{ backgroundImage: "url('/images/AboutUs/journey/bgi.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute left-0 w-full h-full bg-black opacity-50"></div>

                {/* Static 20 */}
                <div className="max-w-[88vw] mx-auto py-52 text-white flex justify-between items-center z-10">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[200px]">20 <hr /></h1>
                    </motion.div>

                    {/* Scrolling Text Section with Up/Down Arrows */}
                    <div className="relative w-full">
                        <button
                            onClick={scrollUp}
                            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2  p-2 rounded-full z-20"
                        >
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="flex flex-col overflow-y-scroll h-[500px] scrollbar-hidden group"
                        >
                            {journeydata.map((item, index) => (
                                <div key={index}>
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.8, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className={`flex ${index === 0 ? "mt-[99px]" : "my-[51.5px]"} gap-x-24 `}
                                    >
                                        <h1 className="text-[200px] text-primary">
                                            {item.year}
                                            <hr className="border-primary mt-[1px]" />
                                        </h1>

                                        <Image
                                            src={item.image}
                                            alt="Journey Image"
                                            height={300}
                                            width={300}
                                            className="h-[400px]"
                                        />
                                        <h2 className="text-[30px]">{item.info}</h2>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={scrollDown}
                            className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2  p-2 rounded-full z-20"
                        >
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Journey;
