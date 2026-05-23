import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <div className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Get in touch with us anytime!
          </p>
        </div>
      </div>

      {/* CONTACT CONTAINER */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <p className="small-title">GET IN TOUCH</p>

          <h2>
            We Are Here To Help You 🍽️
          </h2>

          <p>
            Have questions about our restaurants, delivery,
            or menu items? Reach out to us anytime.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Bangalore, Karnataka, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@foodiehub.com</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Enter your name"
            />

            <input
              type="email"
              placeholder="Enter your email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;