
import React from "react";

export default function LessonDashboard({ onSelect }) {
  return (
    <div style={{ padding: 32 }}>
      <h1>Nature Unplugged – Dashboard</h1>
      <p>Select a module:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i + 1)}
            style={{ padding: 20, borderRadius: 12, border: "1px solid #ccc" }}
          >
            Module {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
