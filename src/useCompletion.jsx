import { useState, useEffect } from "react";

export function useCompletion() {
  const [completed, setCompleted] = useState(() => {
    const stored = localStorage.getItem("completedModules");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("completedModules", JSON.stringify(completed));
  }, [completed]);

  const toggleComplete = (moduleNumber) => {
    setCompleted((prev) => ({
      ...prev,
      [moduleNumber]: !prev[moduleNumber],
    }));
  };

  return { completed, toggleComplete };
}
