import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1aiqir", // Service ID
        "template_h00ilyg", // Template ID
        form.current,
        "nF6H_Iwu86GYbDERk" // حط الـ Public Key بتاعك هنا
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset(); // امسح الفورم بعد الإرسال
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h1 className="header fade-in-up">Get In Touch</h1>
      <p className="fade-in-up animate-delay-1">
        Have a project in mind or want to collaborate? Feel free to reach out,
        I’m always open to <br /> discussing new opportunities.
      </p>
      <div className="contact">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your Name</label>
          <input type="text" name="from_name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="from_email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" placeholder="Write your message..." rows="5" required></textarea>

          <button className="send-btn" type="submit">
            <span>Send Message</span>
          </button>
        </form>

        <div className="contact-info">
          <h2>Contact information</h2>
          <div className="info-card">
            <Mail size={18} /> <span>osama11111777@gmail.com</span>
          </div>
          <div className="info-card">
            <Phone size={18} /> <span>+20 1064035699</span>
          </div>
          <div className="info-card">
            <MapPin size={18} /> <span>Assiut, Egypt</span>
          </div>
          <div className="info-card">
            <Clock size={18} /> <span>Open to freelance & collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
}
