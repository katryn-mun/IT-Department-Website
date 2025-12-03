import React from "react";

export default function Home({ setRoute }) {
  return (
    <section className="hero" aria-labelledby="homeTitle">
      <div className="hero-card">
        <h2 id="homeTitle">Welcome to the IT Department</h2>
        <p>
          We prepare students to design, build, and manage technology solutions.
          Our curriculum focuses on software engineering, networking, cybersecurity, and data science.
        </p>

        <h3>Featured programs</h3>
        <ul>
          <li>Bachelor of Science in Computer Science</li>
          <li>Associate in Network Administration</li>
          <li>Certificate in Cybersecurity</li>
        </ul>

        <p style={{ marginTop: "1rem" }}>
          <button className="cta" onClick={() => setRoute("programs")}>View Programs</button>
        </p>
      </div>

      <aside className="hero-card" aria-hidden="false">
        <h3>Apply / Request Info</h3>
        <p>Contact our admissions office for details about admissions and transfer credit.</p>
        <address>
          <div>Phone: (555) 555-5555</div>
          <div>Email: <a href="mailto:it@example.edu">it@example.edu</a></div>
        </address>
      </aside>
    </section>
  );
}