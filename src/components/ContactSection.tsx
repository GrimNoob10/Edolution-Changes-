// src/components/ContactSection.tsx
import React, { useRef, useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  company?: string; // honeypot
}
type Status = "idle" | "loading" | "success" | "error";

// If you use a Vite dev proxy, leave API_BASE empty ("").
// Otherwise set VITE_API_BASE=http://localhost:5000 in .env.local
const API_BASE = import.meta.env.VITE_API_BASE || "";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const isEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Honeypot: if filled, silently succeed
    if (formData.company && formData.company.trim() !== "") {
      setStatus("success");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !isEmail(formData.email) ||
      !formData.message
    ) {
      setStatus("error");
      setErrorMsg("Please complete required fields with valid details.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        company: "",
      });
      formRef.current?.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section className="w-full font-sans text-center bg-contact-bg pt-10 max-sm:mt-2 max-sm:mb-10">
      {/* Heading */}
      <h2 className="text-ink text-4xl font-semibold mb-4 max-sm:text-[28px]">
        Ready To <span className="text-brand font-bold">Drive</span> Impact{" "}
        <span className="text-brand font-bold">With Us?</span>
      </h2>

      {/* Description */}
      <p className="max-w-[850px] mx-auto text-textgray text-lg mb-8 leading-relaxed px-4">
        Let's partner to transform bold goals into real-world outcomes. Whether
        you're a government agency, funder, or potential partner, we deliver at
        scale with clear outcomes and integrity
      </p>

      <p className="text-brand text-lg font-semibold mb-14">
        Connect with us at info@edolutionindia.com
      </p>

      {/* Main White Card */}
      <div className="w-full max-w-[1200px] mx-auto bg-white rounded-ten shadow-card relative overflow-hidden flex max-lg:flex-col">
        {/* Left Green Panel */}
        <div className="bg-darkgreen text-white w-[420px] p-10 rounded-l-ten flex flex-col max-lg:w-full max-lg:rounded-t-ten">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-[#C9C9C9] mb-6">Lets Connect</p>

          {/* Live Google Map */}
          <div className="rounded-ten overflow-hidden mb-8 h-[220px] w-full">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.868734348603!2d72.86795847507017!3d19.10384155202826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c1db7db61f%3A0xfec36ab9cc9cb469!2sKanakia%20Wall%20Street!5e0!3m2!1sen!2sin!4v1731328000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
              <span className="text-white text-base">info@edolutionindia.com</span>
            </div>

            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7L12 22.5L18.3293 15.0353C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" />
              </svg>
              <span className="text-white text-base leading-normal">
                714A, B WING, 7th Floor, Kanakia Wall Street, Chakala,
                Andheri-Kurla Road, Andheri East, Mumbai - 400093
              </span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form ref={formRef} onSubmit={onSubmit} className="flex-1 p-10 relative text-left max-lg:p-6">
          {/* Honeypot (keep hidden) */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={onChange}
            className="hidden"
            autoComplete="off"
            tabIndex={-1}
          />

          {/* Name Row */}
          <div className="flex gap-8 mb-8 max-md:flex-col">
            <div className="flex-1">
              <label className="block text-sm font-medium text-ink mb-2">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                placeholder="Enter first name"
                className="w-full h-[50px] bg-field rounded px-4 text-sm placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-ink mb-2">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                placeholder="Enter last name"
                className="w-full h-[50px] bg-field rounded px-4 text-sm placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex gap-8 mb-8 max-md:flex-col">
            <div className="flex-1">
              <label className="block text-sm font-medium text-ink mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Enter Email ID"
                className="w-full h-[50px] bg-field rounded px-4 text-sm placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-ink mb-2">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={onChange}
                placeholder="Enter phone number"
                className="w-full h-[50px] bg-field rounded px-4 text-sm placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-ink mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={6}
              placeholder="Enter your message"
              className="w-full bg-field rounded px-4 py-3 text-sm placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-brand resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-3 w-[200px] bg-brand text-white py-3 rounded-pill shadow-button hover:bg-[#18875E] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Submit"}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm3.707 12.707-5 5a1 1 0 0 1-1.414-1.414L13.586 12 9.293 7.707A1 1 0 0 1 10.707 6.293l5 5a1 1 0 0 1 0 1.414Z" />
            </svg>
          </button>

          {/* Feedback */}
          {status === "success" && (
            <p className="mt-4 text-green-600 text-sm">Thanks! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-sm">Oops! {errorMsg}</p>
          )}

          {/* Decorative plane */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e517d25705b4a8783a28f47ecfdb9db1bf50d24a?width=482"
            alt="Paper Plane"
            className="absolute right-5 -bottom-6 w-[200px] rotate-[-15deg] max-md:hidden"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
