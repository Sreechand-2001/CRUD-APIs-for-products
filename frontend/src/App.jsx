import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import ShowProducts from "./Components/ShowProducts";
import DeleteProduct from "./Components/DeleteProduct";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AddProduct />} path="/products/add-product" />
        <Route element={<ShowProducts />} path="/products/:id" />
        <Route element={<DeleteProduct />} path="/products/delete/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
