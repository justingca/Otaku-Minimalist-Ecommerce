import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NavigationMenu from "./components/Navbar";
import Footer from "./components/Footer";
import ProductShowPage from "./components/ProductShowPage";
import ProductsAll from "./components/ProductsAll";

function App() {
  return (
    <BrowserRouter>
    <NavigationMenu/>
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route
          path="/products/:productId"
          element={<ProductShowPage/>}
        />
        <Route
          path="/products/all"
          element={<ProductsAll/>}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
