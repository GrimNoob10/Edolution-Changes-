// src/components/VendorRegistration.tsx
import React, { useState } from "react";

interface VendorFormData {
  companyName: string;
  contactPersonName: string;
  email: string;
  natureOfServices: string;
  pastClients: string;
  company?: string; // honeypot
}
type Status = "idle" | "loading" | "success" | "error";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const VendorRegistration: React.FC = () => {
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: "",
    contactPersonName: "",
    email: "",
    natureOfServices: "",
    pastClients: "",
    company: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (formData.company && formData.company.trim() !== "") {
      setStatus("success");
      return;
    }

    if (
      !formData.companyName ||
      !formData.contactPersonName ||
      !isEmail(formData.email) ||
      !formData.natureOfServices ||
      !formData.pastClients
    ) {
      setStatus("error");
      setErrorMsg("Please fill all fields with valid details.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/vendor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to submit");
      }

      setStatus("success");
      setFormData({
        companyName: "",
        contactPersonName: "",
        email: "",
        natureOfServices: "",
        pastClients: "",
        company: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to submit. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section className="w-full text-center mt-[100px] bg-contact-bg pb-16">
      <div className="w-full text-[#252525] text-center text-4xl font-semibold capitalize mb-10 max-sm:text-[28px] max-sm:px-2.5">
        <div className="text-[#197B55] font-bold">Vendor</div>
        Registration
      </div>

      <div className="w-full max-w-[1397px] text-[#252525] text-center text-xl font-normal mb-[60px] mx-auto max-sm:text-base max-sm:px-2.5">
        We work with reliable vendors who share our commitment to quality
        and transparency. If you'd like to register as a vendor, please
        fill out the form below — our team will review your details and
        reach out when opportunities align.
      </div>

      <div className="w-[783px] shadow-[0_6px_60px_30px_rgba(0,0,0,0.08)] relative bg-white mx-auto p-[35px] rounded-[10px] max-md:w-full max-md:max-w-[600px] max-sm:p-5">
        <form onSubmit={handleSubmit}>
          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="hidden"
            autoComplete="off"
            tabIndex={-1}
          />

          <div className="flex flex-col gap-3 mb-8">
            <label htmlFor="companyName" className="text-[#252525] text-sm font-medium leading-5">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter Company Name"
              className="flex h-[52px] items-center rounded bg-[#F0F0F0] px-4 py-2.5 text-[#252525] text-sm placeholder:text-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#197B55]"
              required
            />
          </div>

          <div className="flex gap-[66px] mb-8 max-md:flex-col max-md:gap-5">
            <div className="flex flex-col gap-3 flex-1">
              <label htmlFor="contactPersonName" className="text-[#252525] text-sm font-medium leading-5">
                Contact Person Name
              </label>
              <input
                id="contactPersonName"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleInputChange}
                placeholder="Enter Contact Person Name"
                className="flex h-[52px] items-center rounded bg-[#F0F0F0] px-4 py-2.5 text-[#252525] text-sm placeholder:text-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#197B55]"
                required
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <label htmlFor="vendorEmail" className="text-[#252525] text-sm font-medium leading-5">
                Email
              </label>
              <input
                id="vendorEmail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email ID"
                className="flex h-[52px] items-center rounded bg-[#F0F0F0] px-4 py-2.5 text-[#252525] text-sm placeholder:text-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#197B55]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <label htmlFor="natureOfServices" className="text-[#252525] text-sm font-medium leading-5">
              Nature of Services
            </label>
            <input
              id="natureOfServices"
              name="natureOfServices"
              value={formData.natureOfServices}
              onChange={handleInputChange}
              placeholder="Enter Nature of Services"
              className="flex h-[52px] items-center rounded bg-[#F0F0F0] px-4 py-2.5 text-[#252525] text-sm placeholder:text-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#197B55]"
              required
            />
          </div>

          <div className="flex flex-col gap-3 mb-10">
            <label htmlFor="pastClients" className="text-[#252525] text-sm font-medium leading-5">
              Past Clients or Projects
            </label>
            <input
              id="pastClients"
              name="pastClients"
              value={formData.pastClients}
              onChange={handleInputChange}
              placeholder="Enter Past Clients or Projects"
              className="flex h-[52px] items-center rounded bg-[#F0F0F0] px-4 py-2.5 text-[#252525] text-sm placeholder:text-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#197B55]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-[266px] justify-center items-center gap-3.5 shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] cursor-pointer bg-[#197B55] mx-auto px-[34px] py-3 rounded-[50px] hover:bg-[#156B47] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="text-white text-center text-base font-semibold capitalize">
              {status === "loading" ? "Submitting..." : "Submit"}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.38298 0 0 5.38298 0 12C0 18.617 5.38298 24 12 24C18.617 24 24 18.617 24 12C24 5.38298 18.617 0 12 0ZM15.707 12.707L10.707 17.707C10.6143 17.8 10.504 17.8737 10.3827 17.924C10.2614 17.9743 10.1313 18.0001 9.99998 18C9.86865 18.0001 9.73858 17.9743 9.61725 17.924C9.49592 17.8737 9.38572 17.8 9.29297 17.707C8.90198 17.316 8.90198 16.684 9.29297 16.293L13.586 12L9.29302 7.707C8.90203 7.31602 8.90203 6.684 9.29302 6.29302C9.684 5.90203 10.316 5.90203 10.707 6.29302L15.707 11.293C16.098 11.684 16.098 12.316 15.707 12.707Z" />
            </svg>
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-600 text-sm">
              Thanks! Your registration has been submitted.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-sm">Oops! {errorMsg}</p>
          )}
        </form>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/807b39988ab84a9a6bf93a02103a1d9a818cf94e?width=381"
          alt=""
          className="w-[191px] h-[110px] rotate-[-12.929deg] absolute left-[175px] -bottom-10 max-md:hidden"
        />
      </div>
    </section>
  );
};

export default VendorRegistration;
