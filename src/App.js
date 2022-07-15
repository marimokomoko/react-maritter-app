import React from "react";
import "./App.css";
import Sidebar from "./components/sideber/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* { Sidebar } */}
      <Sidebar />
      {/* { Timeline } */}
      <Timeline />
      {/* { Widget } */}
      <Widgets />
    </div>
  );
}

export default App;
