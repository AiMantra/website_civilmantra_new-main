"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteModal from "../../../../components/AdminPanel/DeleteModal"; // Adjust the path accordingly

interface ClientLogo {
  id: string;
  name: string;
  imglogo: string; 
}

const Document: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    sub_company: string;
    imglogo: File | null;
  }>({
    name: "",
    sub_company: "025d0b52-e892-4868-a3bb-6b70dcdffb4d",
    imglogo: null,
  });

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [clientLogos, setClientLogos] = useState<ClientLogo[]>([]);

  // Fetch data from API
  const getDocument = async () => {
    try {
      const res = await axios.get("https://cipl.aimantra.info/website/clientLogo/");
      if (res.status === 200) {
        setClientLogos(res.data);
      }
    } catch (err: any) {
      toast.error("Failed to fetch client logos.");
    }
  };

  useEffect(() => {
    getDocument();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      setFormData((prev) => ({ ...prev, imglogo: file }));
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName(null);
      toast.error("Invalid file type. Please upload a .png, .jpg, or .jpeg file.");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loadingToastId = toast.loading("Uploading... Please wait");
    const formDataa = new FormData();
    formDataa.append("name", formData.name);
    formDataa.append("sub_company", formData.sub_company);
    if (formData.imglogo) formDataa.append("imglogo", formData.imglogo);

    try {
      const res = await axios.post(
        "https://cipl.aimantra.info/website/clientLogo/",
        formDataa,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        toast.success("Client image submitted successfully!");
        await getDocument();
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred while uploading.");
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  const openDeleteModal = (id: string) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteId(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
    const loadingToastId = toast.loading("Deleting... Please wait");
     let res = await axios.delete(`https://cipl.aimantra.info/website/clientLogo/${deleteId}/`);
    if(res.status===500)
      toast.success("Client logo deleted successfully!");
      setClientLogos((prev) => prev.filter((logo) => logo.id !== deleteId));
  } catch (err: any) {
    toast.error(err.message || "An error occurred while deleting.");
  } finally {
      toast.dismiss();
    closeDeleteModal();
    }
  };

  return (
    <div className="flex flex-col mt-20 items-center h-auto py-12 pb-20 bg-[#f0f5fa] px-8 md:px-56">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">
          Submit a New <span className="text-[#990000]">Client Image</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below to submit a new testimonial.
        </p>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter company name"
              onChange={handleInputChange}
              value={formData.name}
              className="block w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#333333]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="imglogo"
              className="cursor-pointer w-52 flex items-center justify-center gap-2 bg-[#990000] text-white py-2 px-4 rounded-lg hover:bg-[#b80202] transition-colors shadow-md border border-[#800000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>Upload Image</span>
              <input
                id="imglogo"
                type="file"
                name="imglogo"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {selectedFileName && (
              <p className="mt-2 text-sm text-gray-600">Selected File: {selectedFileName}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-[#990000] text-white py-3 text-lg rounded-lg hover:bg-[#b80202] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Client Logos</h2>
        {clientLogos.length === 0 ? (
          <p className="text-gray-600">No client logos found.</p>
        ) : (
          <ul>
            {clientLogos.map((logo) => (
              <li
                key={logo.id}
                className="flex justify-between  items-center border-b py-10  border"
              >
                <span className="font-semibold text-xl  ">{logo.name}
                <img src={logo.imglogo} alt="" className="w-52 h-28 "/>
                
                </span>
               
                <button
                  onClick={() => openDeleteModal(logo.id)}
                  className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <DeleteModal
        posttype="Client Logo"
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        
      />
    </div>
  );
};

export default Document;
