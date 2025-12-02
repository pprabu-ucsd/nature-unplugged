
import React, { useState } from "react";
import LessonDashboard from "./LessonDashboard";
import LessonPage from "./LessonPage";

export default function NatureUnpluggedApp() {
  const [selectedModule, setSelectedModule] = useState(null);
  return selectedModule ? (
    <LessonPage moduleNumber={selectedModule} onBack={() => setSelectedModule(null)} />
  ) : (
    <LessonDashboard onSelect={setSelectedModule} />
  );
}
