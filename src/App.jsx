import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Energie, Home, ScrollToTop, Services, Solar, Sun} from "./pages";
import Footer from "./components/Footer";
import './components/i18n'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/solar" element={<Solar/>} />
          <Route path="/energie" element={<Energie/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/zevrechner" element={<Sun/>} />
          
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;
