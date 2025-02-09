import "./App.css";
//components


import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import Contact from "./components/Contact/Contact";
import Cancellation from "./components/Cancellation/Cancellation";

import Jan from  "./components/Jan/Jan";
import Feb from "./components/Feb/Feb";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="w-screen max-w-full overflow-hidden">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Contact/>}/>
            <Route path="/jan" element={<Jan />} />
            <Route path="/feb" element={<Feb />} />

          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
