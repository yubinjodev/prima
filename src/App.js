import "./App.css";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

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
      <Navbar />
      <Routes>
        {allRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
