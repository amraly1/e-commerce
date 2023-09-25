import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProductsList from "./components/shop/pages/ProductsList";
import ShopHeader from "./components/shop/pages/ShopHeader";
import Shop from "./components/shop/Shop";
import AdminDashboard from "./components/shop/admin/AdminDashboard";
import NotFound from "./components/shop/pages/NotFound";
import BrowseProducts from "./components/shop/product/BrowseProducts";
import AddProducts from "./components/shop/product/AddProducts";
import EditProducts from "./components/shop/product/EditProducts";
import Admin from "./components/shop/pages/Admin";

function App() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [productsList, setproductsList] = useState([]);
  const [searchInput, setsearchInput] = useState(
    new URLSearchParams(search).get("search") ?? ""
  );
  async function fetchProducts(searchVal) {
    try {
      let getUrl = "https://dummyjson.com/products";

      if (searchVal) {
        getUrl = getUrl + "/search?q=" + searchInput;
      }
      const res = await fetch(getUrl);

      const data = await res.json();
      console.log(data);
      setproductsList(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  //window.onload//
  useEffect(() => {
    fetchProducts(searchInput);
  }, []);
  function handleSearch(e) {
    const val = e.target.value;
    setsearchInput(val);
    const query = new URLSearchParams(search);
    query.set("search", val);
    navigate("/?search=" + val);
    fetchProducts(val);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Shop
              setsearchInput={searchInput}
              handleSearch={handleSearch}
              productsList={productsList}
            />
          }
        />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/products" element={<BrowseProducts />} />
          <Route path="/admin/products/add" element={<AddProducts />} />
          <Route path="/admin/products/:id" element={<EditProducts />} />
        </Route>
        {/* Wild Card */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
