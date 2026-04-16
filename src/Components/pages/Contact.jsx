import  { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaGlobe } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal";

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

  const revealRef = useReveal()


  return (
    <form ref={revealRef}
      onSubmit={handleFormSubmit}
      className="py-16 flex flex-col items-center justify-center px-4 gap-12 bg-[#19243d] border-white/3 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15),_transparent_60%)]"
    >
      <h1 className="pt-10 gradient-text font-bold text-4xl reveal">Contact</h1>

      
      <div className=" reveal
      min-h-[500px] md:h-[500px] md:max-w-5xl w-full max-w-3xl
      backdrop-blur-xl bg-white/3 border border-white/30  shadow-xl
      shadow-black/10 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10
      hover:-translate-y-0.5
      hover:shadow-[0_0_60px_rgba(168,85,247,0.2)] transition-all duration-300">

        {/* LEFT */}
        <div className=" p-10 text-white  ">
          <h2 className="text-[#FEC5F6] text-2xl font-semibold mb-6">Get in Touch</h2>

          <div className="flex flex-col gap-6">
            <input 
            name="name" value={formData.name} onChange={handleChange}
              type="text" placeholder="Name"
              className="input-style"
              required />

            <input name="email" value={formData.email} onChange={handleChange}
              type="email" placeholder="Email"
              className="input-style"
              required />

            <input name="subject" value={formData.subject} onChange={handleChange}
              type="text" placeholder="Subject"
              className="input-style" />

            <textarea name="message" value={formData.message} onChange={handleChange}
              rows="3" placeholder="Message"
              className="input-style resize-none"
              required />

            <button
              disabled={loading}
              className="mt-6 w-full py-3 rounded-lg border border-blue-400 text-white 
bg-blue-500/10 hover:bg-blue-500 hover:scale-[1.02] active:scale-95 
transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>

      
        

        {/* RIGHT */}
        <div className="  p-10 text-gray-200 md:border-l md:border-white/5" >
          <h2 className="text-[#FEC5F6] text-2xl font-semibold mb-2">Contact us</h2>
          <p className="text-sm text-gray-400 mb-8 ">
            We're open for any suggestion or just to have a chat
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 hover:text-[#FEC5F6] hover:translate-x-1 transition-all duration-300">
              <FaMapMarkerAlt className="mt-1 text-gray-500" />
              <p>Mira Road, Maharashtra</p>
            </div>

            <div className="flex items-center gap-4 hover:text-[#FEC5F6] hover:translate-x-1 transition-all duration-300">
              <FaPhoneAlt className="text-gray-500" />
              <p>+91-9594537013</p>
            </div>

            <div className="flex items-center gap-4 hover:text-[#FEC5F6] hover:translate-x-1 transition-all duration-300">
              <FaPaperPlane className="text-gray-500" />
              <p>poojachavhan179@gmail.com</p>
            </div>

            <div className="flex items-center gap-4 hover:text-[#FEC5F6] hover:translate-x-1 transition-all duration-300">
              <FaGlobe className="text-gray-500" />
              <a href="https://devbypooja.tech/"
                 target="_blank">
                <p>devbypooja.tech</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};