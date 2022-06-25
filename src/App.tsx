import React from "react";
import "./App.css";
import { Footer } from "./Layout/Footer/footer";
import { Content } from "./Layout/Main/content";
import { Sidebar } from "./Layout/Sidebar/sidebar";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
