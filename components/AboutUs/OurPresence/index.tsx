import Link from "next/link";
import { motion } from "framer-motion";

const Presence = [
    { text: "HIGHWAYS & EXPRESSWAYS", url: "" },
    { text: "BRIDGES AND FLYOVER", url: "" },
    { text: "DAM AND IRRIGATION", url: "" },
    { text: "URBAN INFRASTRUCTURE", url: "" },
    { text: "AIRPORT/EMERGENCY LANDING", url: "" },
    { text: "METRO & RAILWAYS", url: "" },
];

const Projects = [
    { place: "Himachal Pradesh" },
    { place: "Jammu & Kashmir" },
    { place: "Haryana" },
    { place: "Uttarakhand" },
    { place: "Punjab" },
    { place: "Rajasthan" },
    { place: "Delhi" },
    { place: "Uttar Pradesh" },
    { place: "Jharkhand" },
    { place: "Bihar" },
    { place: "Madhya Pradesh" },
    { place: "Maharashtra" },
    { place: "Orissa" },
    { place: "Chhattisgarh" },
    { place: "Karnataka" },
    { place: "Tamilnadu" },
    { place: "Telangana" },
    { place: "Nagaland" },
    { place: "Assam" },
    { place: "West Bengal" },
    { place: "Mizoram" },
    { place: "Arunachal Pradesh" },
    { place: "Gujarat" },
];

const OurPresence = () => {
    return (
        <div className="max-w-[88vw] mx-auto mb-20">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}>
                <h1 className="unihead my-10 text-center text-2xl md:text-3xl lg:text-4xl">Our Presence</h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Presence Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-1/2">
                    {Presence.map((item, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index} className="px-2">
                            <Link
                                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                                href={item.url}
                            >
                                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full lg:-translate-x-[-500px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                                    {item.text}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Locations Section */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <h1 className="text-xl md:text-2xl font-bold">Our Locations</h1>
                        <h2 className="text-lg md:text-xl font-bold mt-2 py-2">Offices</h2>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="px-4">
                        <ul className="list-disc marker:text-lg marker:text-primary text-justify space-y-2">
                            <li><span className="text-primary">Registered Office</span> - Delhi-277, Hiran Kudwa, New Delhi - 110041</li>
                            <li><span className="text-primary">Corporate Office</span> - 3rd Floor, Tower 3A, DLF CORPORATE GREENS, Sector 74A, Gurugram, Haryana 122004</li>
                            <li><span className="text-primary">Regional Office</span> - Vasantam Hotel, Deotsidh road, Barsar, Himachal Pradesh - 174305</li>
                        </ul>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-bold   mt-2 py-2">Project Locations</motion.h2>

                    <div className="px-4">
                        <ul className="flex  flex-wrap gap-2 md:gap-3 marker:text-lg marker:text-primary">
                            {Projects.map((item, index) => (
                                <motion.li
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    key={index}
                                    className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base">
                                    {item.place}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPresence;
