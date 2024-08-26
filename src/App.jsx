import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import AppContext from "./AppContext";
import Hero from "./components/heroSection/Hero";
import WhoDoIRefer from "./components/WhoDoIRefer";
import ReferalBenifits from "./components/ReferalBenifits";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = useState({
    isSidebarOpen: false,
    isLoggedin: localStorage.getItem("token") ? true : false,
    isReferFormOpen: false,
    isLoginFormOpen: false,
    isRegisterFormOpen: false,
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      <section>
        <Navbar />
        <Hero />
        <WhoDoIRefer />
        <ReferalBenifits />
        <LoginForm />
        <RegisterForm />
        <FaqSection />
        <Footer />
      </section>
    </AppContext.Provider>
  );
}

export default App;
