"use client"

import React, { useState } from 'react';

export default function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://cipl.aimantra.info/website/innovation/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert("Image uploaded successfully!");
        console.log("Response:", result);
      } else {
        alert("Failed to upload the image.");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  return (
    <div className="flex justify-start mt-20 items-center h-auto py-12 pb-20 bg-[#f0f5fa] px-56">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full py-10 px-14">
        <h1 className="text-3xl font-bold mb-4">
          Submit a New <span className="text-[#990000]">Inovation</span>
        </h1>
        <p className="text-gray-600 mb-8">Fill out the form below to submit a new Inovation.</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium text-gray-700 mb-2">Company Logo</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
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
                Choose Image
              </label>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-full bg-[#990000] text-white p-2 py-3 text-lg rounded-lg hover:bg-[#b80202] transition-colors"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
