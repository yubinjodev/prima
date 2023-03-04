import "./App.css";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { ModalContext } from "./context/ModalContext";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";

function App() {
  const [showModal, setShowModal] = useState(false);

  const allRoutes = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "Registration",
      path: "/registration",
      element: <Register />,
    },
    {
      name: "Contact us",
      path: "/contact-us",
      element: <Contact />,
    },
  ];
  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <LoginModal />
        <Navbar />
      </ModalContext.Provider>

      <Routes>
        {allRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
      <ScrollToTop smooth />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
