import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import CardList from "./components/CardList.jsx";
import ItemList from "./components/ItemList.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<><HeroBanner /><CardList /></>} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}
