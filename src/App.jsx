import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Home, ScrollToTop} from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;
