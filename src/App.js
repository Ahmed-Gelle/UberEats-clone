import "./App.css";
import { ModalProvider } from "styled-react-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus/Contactus";
import Auth from "./pages/Auth/Auth";
import HowItWorks from "./pages/HowItWorks";
import SaveWater from "./pages/SaveWater";
import WorkWithUs from "./pages/WorkWithUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route exact path="/login" element={<Auth />} />
          <Route exact path="/how-it-works" element={<HowItWorks />} />
          <Route exact path="/save-water" element={<SaveWater />} />
          <Route exact path="/work-with-us" element={<WorkWithUs />} />
        </Routes>
        <Footer />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
