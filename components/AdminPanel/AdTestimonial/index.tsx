"use client";

import React, { useState } from "react";

const AdTestimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_Name: "",
    position: "",
    reviews: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-start mt-20 items-center h-auto py-12 pb-20 bg-[#f0f5fa] px-56">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full py-10 px-14">
        <h1 className="text-3xl font-bold mb-4">
          Submit a New <span className="text-[#990000]">Testimonial</span>
        </h1>
        <p className="text-gray-600 mb-8">Fill out the form below to submit a new testimonial.</p>

        <form>
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-2">Client Name</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                placeholder="Enter client's name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                placeholder="Enter the company name"
                name="company_Name"
                value={formData.company_Name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Client's Position</label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
              placeholder="Enter the client's position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Testimonial Review</label>
            <textarea
              className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
              placeholder="Write your testimonial here"
              name="review"
              value={formData.reviews}
              onChange={handleChange}
              required
            />
          </div>

          <div className="">
            <label className="block font-medium text-gray-700 mb-2">Company Logo</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                id="file-upload"
                className="hidden"
                required
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer w-32 flex items-center justify-center gap-2 bg-[#990000] text-white p-2 rounded-lg hover:bg-[#b80202] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 8L12 3M12 3L7 8M12 3V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              type="button"
              className="w-full bg-[#990000] text-white p-2 py-3 text-lg rounded-lg hover:bg-[#b80202] transition-colors"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdTestimonial;
