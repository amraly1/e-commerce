import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleAddProduct(event) {
    event.preventDefault();

    if (!name) return alert("Product Name is empty");

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      body: JSON.stringify({
        title: name,
      }),
    })
      .then((res) => res.json())
      .then((body) => {
        alert("Product added successfully and id = " + body.id);
        navigate("/admin/products");
      });
  }
  return (
    <div className="container my-3">
      <form
        className="row"
        onSubmit={(e) => {
          handleAddProduct(e);
        }}
      >
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <button className="btn btn-success" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
