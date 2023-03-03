import "./App.css";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { LoginModal } from "./components/LoginModal";

function App() {
  const allRoutes = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
  ];
  return (
    <BrowserRouter>
    <LoginModal/>
      <Navbar />
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
