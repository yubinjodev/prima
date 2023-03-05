import "./App.css";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { LoginContext } from "./context/LoginContext";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";
import { BasketModal } from "./components/BasketModal";
import { BasketContext } from "./context/BasketContext";
import { SearchContext } from "./context/SearchContext";

function App() {
  const [showLoginModal, setshowLoginModal] = useState(false);
  const [showBasketModal, setBasketModal] = useState(false);
  const [showSearch, setSearch] = useState(false);

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

  console.log(showSearch)
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ showLoginModal, setshowLoginModal }}>
        <BasketContext.Provider value={{ showBasketModal, setBasketModal }}>
          <SearchContext.Provider value={{ showSearch, setSearch }}>
            <BasketModal />
            <LoginModal />
            <Navbar />
          </SearchContext.Provider>
        </BasketContext.Provider>
      </LoginContext.Provider>

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
