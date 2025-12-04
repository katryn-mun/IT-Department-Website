import React from "react";

const programs = [
  {
    title: "BS Computer Science",
    summary: "Two year degree focused on software development, algorithms, and systems.",
    details: [
      "Core: Data Structures, Algorithms, OS",
      "Electives: AI, Mobile Dev, Databases",
      "Careers: Software Engineer, Data Engineer"
    ]
  },
  {
    title: "Network Administration (AAS)",
    summary: "Two-year program focused on networking, routing, and security.",
    details: ["Routing & Switching", "Network Security", "Cert prep: CompTIA/CCNA"]
  },
  {
    title: "Cybersecurity Certificate",
    summary: "Short certificate teaching fundamentals of cyber defense and forensics.",
    details: ["Security Fundamentals", "Incident Response", "Ethical Hacking"]
  }
];

export default function Programs() {
  return (
    <section>
      <h2>Programs</h2>
      <div className="programs-grid">
        {programs.map((p) => (
          <article key={p.title} className="program" aria-labelledby={`prog-${p.title}`}>
            <h3 id={`prog-${p.title}`}>{p.title}</h3>
            <p>{p.summary}</p>
            <ul>
              {p.details.map((d, i) => (<li key={i}>{d}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}