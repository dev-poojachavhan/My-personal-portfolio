import  { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaGlobe } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      access_key: "8b8a942a-3c4b-4805-a3ae-6c1ee902f63a", // 🔑 api key
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "New Contact Form Submission",
      message: formData.message,
      botcheck: ""
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="min-h-screen flex flex-col items-center justify-center px-4 gap-14 bg-[#19243d]"
    >
      <h1 className="text-slate-200 font-bold text-4xl">Contact</h1>

      <div className="max-w-5xl w-full shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT */}
        <div className="bg-[#6670A4] p-10 text-white">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <div className="flex flex-col gap-6">
            <input name="name" value={formData.name} onChange={handleChange}
              type="text" placeholder="Name"
              className="bg-transparent border-b border-white/40 py-2 placeholder-white/70"
              required />

            <input name="email" value={formData.email} onChange={handleChange}
              type="email" placeholder="Email"
              className="bg-transparent border-b border-white/40 py-2 placeholder-white/70"
              required />

            <input name="subject" value={formData.subject} onChange={handleChange}
              type="text" placeholder="Subject"
              className="bg-transparent border-b border-white/40 py-2 placeholder-white/70" />

            <textarea name="message" value={formData.message} onChange={handleChange}
              rows="3" placeholder="Message"
              className="bg-transparent border-b border-white/40 py-2 placeholder-white/70 resize-none"
              required />

            <button
              disabled={loading}
              className="border shadow-xl bg-[#4b5791] hover:bg-[#303966] transition px-6 py-2 rounded-md w-fit disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#ECEDF2] p-10 text-gray-700">
          <h2 className="text-2xl font-semibold mb-2">Contact us</h2>
          <p className="text-sm text-gray-500 mb-8">
            We're open for any suggestion or just to have a chat
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-gray-500" />
              <p>Mira Road, Maharashtra</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-gray-500" />
              <p>+91-9594537013</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPaperPlane className="text-gray-500" />
              <p>poojachavhan179@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaGlobe className="text-gray-500" />
              <p>pchavhan@devbypooja.tech</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};