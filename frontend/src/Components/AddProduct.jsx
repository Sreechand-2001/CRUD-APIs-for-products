import axios from "axios";
import style from "./home.module.css";
import { useState } from "react";
const AddProduct = () => {
  const [productID, setProductID] = useState();
  const [productName, setProductName] = useState();
  const [productCategory, setProductCategory] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [productDescription, setProductDescription] = useState();
  const formHandler = (e) => {
    e.preventDefault();
    const payload = {
      pid: productID,
      "product name": productName,
      "product category": productCategory,
      "image url": imageUrl,
      "product description": productDescription,
    };
    axios.post("http://localhost:5000/products/add-product", payload);
    setProductID("");
    setProductName("");
    setProductCategory("");
    setImageUrl("");
    setProductDescription("");
  };
  return (
    <section id={style.addProduct}>
      <form className={style.form}>
        <div class="mb-3">
          <label class="form-label">Product ID</label>
          <input
            type="text"
            class="form-control"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Product Name</label>
          <input
            type="text"
            class="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Product Category</label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option selected>--Select--</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Electronics">Electronics</option>
            <option value="Kitchen & Home">Kitchen & Home</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Image Url</label>
          <input
            type="text"
            class="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Product Description</label>
          <input
            type="text"
            class="form-control"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={formHandler}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
