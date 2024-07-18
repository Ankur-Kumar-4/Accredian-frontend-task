import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import React from "react";
import AppContext from "./AppContext";
import Hero from "./components/heroSection/Hero";

function App() {
  const [state, setState] = useState({
    isSidebarOpen: false,
    isdark: true,
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      <section>
        <Navbar />
        <Hero />
      </section>
    </AppContext.Provider>
  );
}
export default App;
