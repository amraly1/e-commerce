import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProducts() {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setName(data.title);
      });
  }, []);

  function handleEditProduct(event) {
    event.preventDefault();

    if (!name) return alert("Product Name is empty");

    fetch("https://dummyjson.com/products/" + id, {
      method: "PUT",
      body: JSON.stringify({
        title: name,
      }),
    })
      .then((res) => ({
        data: res.json(),
        res: res,
      }))
      .then(({ data, res }) => {
        console.log(data);
        alert("Product Edited successfully and data = " + JSON.stringify(data));

        navigate("/admin/products");
      });
  }

  return (
    <div className="container my-3">
      <form className="row" onSubmit={(e) => handleEditProduct(e)}>
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
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProducts;
