import React from "react";

export default function About() {
  return (
    <section className="hero-card" aria-labelledby="aboutTitle">
      <h2 id="aboutTitle">About the IT Department</h2>
      <p>
        The IT Department was founded to provide practical and theoretical education in computing.
        Our mission is to produce graduates who are ready for the evolving tech workforce and who value ethical practice.
      </p>

      <h3>Goals</h3>
      <ol>
        <li>Deliver relevant, hands-on curriculum</li>
        <li>Partner with industry for internships and projects</li>
        <li>Promote diversity in computing</li>
      </ol>

      <h3>History & Facilities</h3>
      <p>Our labs are equipped with up-to-date hardware, virtualization platforms, and secure network segments for student work.</p>
    </section>
  );
}