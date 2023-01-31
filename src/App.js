import "./App.scss"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import ScrollToTop from "./scroll/ScrollToTop";
import { Routes, Route } from "react-router-dom";





const App = () => {
  return (
    <div className="app">
      <ScrollToTop/>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
