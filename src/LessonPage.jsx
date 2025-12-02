
import React from "react";

export default function LessonPage({ moduleNumber, onBack }) {
  return (
    <div style={{ padding: 32 }}>
      <button onClick={onBack}>← Back</button>
      <h2>Module {moduleNumber} – Lesson</h2>
      <div style={{ marginTop: 20, width: "100%", height: 300, background: "#ddd",
                    display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span>📹 Video Placeholder</span>
      </div>
      <p style={{ marginTop: 20 }}>Lesson content will go here.</p>
    </div>
  );
}
