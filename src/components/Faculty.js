import React from "react";
import FACULTY from "../data/Data";

export default function Faculty() {
  return (
    <section>
      <h2>Faculty & Staff</h2>
      <div className="faculty-grid" role="list">
        {FACULTY.map((f) => (
          <div key={f.id} className="faculty-card" role="listitem">
            <div aria-hidden="true" className="faculty-avatar" />
            <div>
              <strong>{f.name}</strong>
              <div style={{ fontSize: "0.95rem", color: "var(--muted)" }}>{f.title}</div>
              <div style={{ marginTop: "0.5rem" }}>{f.bio}</div>
              <div style={{ marginTop: "0.5rem" }}>
                <a href={`mailto:${f.email}`}>{f.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}