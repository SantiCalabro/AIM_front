import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import OurCompany from "./containers/OurCompany";
import Detail from "./containers/Detail";
import Contact from "./containers/Contact";
import ProductCategory from "./containers/ProductCategory";
import Products from "./containers/Products";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nosotros" element={<OurCompany />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/contacto" element={<Contact />} />
            <Route exact path="/:category" element={<ProductCategory />} />
            <Route exact path="/productos" element={<Products />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
