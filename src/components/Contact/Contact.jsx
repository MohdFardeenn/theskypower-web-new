import { useState } from "react";
import "./Contact.css";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("Server error");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Connect with Our team</h2>

          <p>
            Our team are here to assist with detailed specifications and
            tailored battery solutions. Reach out for a free consultation and
            personalized quote.
          </p>

          <div className="info-box">
            <span><FaPhoneAlt/></span>
            <div>
              <h4>Call Us</h4>
              <p>+91 7351211915 (IND) <br/> +971 58 262 6639 (UAE)</p>
            </div>
          </div>

          <div className="info-box">
            <span><FaEnvelope/></span>
            <div>
              <h4>Email Us</h4>
              <p>theskypowerr@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <span><FaMapMarkerAlt/></span>
            <div>
              <h4>Visit Our Branch</h4>
              <p>Chandpur, Bijnor, Uttar Pradesh, India-246725</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-card">
          <h2>Request a Quote</h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              />
              

            <button type="submit">
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;