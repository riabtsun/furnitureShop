import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Product from "./pages/Product/Product.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Room from "./pages/Room/Room.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./styles/style.css";
import { useEffect } from "react";
import ky from "ky";
import Login from "./pages/Login/Login.jsx";
import Registration from "./pages/Registration/Registration.jsx";

function App() {
  useEffect(() => {
    ky("http://localhost:8080/users")
      .json()
      .then((res) => {
        console.log(res);
      });
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/room" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
