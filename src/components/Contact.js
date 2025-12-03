import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple client-side validation
    if (!form.name || !form.email || !form.message) {
      alert("Please complete all fields before sending.");
      return;
    }
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <div className="contact-grid">
        <form className="form-card" onSubmit={handleSubmit} aria-label="Contact form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} />

          <div style={{ marginTop: "0.6rem" }}>
            <button type="submit">Send message</button>
            {sent && <span style={{ marginLeft: "0.6rem", color: "green" }}>Message sent!</span>}
          </div>
        </form>

        <aside className="hero-card" aria-labelledby="contact-info">
          <h3 id="contact-info">Department Office</h3>
          <p>Address: 123 Campus Ave, Example City</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: <a href="mailto:it@example.edu">it@example.edu</a></p>
        </aside>
      </div>
    </section>
  );
}