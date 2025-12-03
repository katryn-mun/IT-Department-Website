import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Faculty from "./components/Faculty";
import Contact from "./components/Contact";

/*
  Simple single-page app routing by internal state. 
  This avoids adding React Router for a school project.
*/
export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="site">
      <header className="site-header">
        <div className="brand">
          <h1>IT Department</h1>
          <p className="tagline">Technology, learning, and innovation</p>
        </div>
      </header>

      <main className="site-main" role="main">
        <Home/>
        <About/>
        <Programs/>
        <Faculty/>
        <Contact/>
      </main>
    </div>
  );
}