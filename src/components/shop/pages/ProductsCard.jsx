import React from "react";
import styles from "./ProductsCard.module.css";
function ProductsCard({ product }) {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card-img"]}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={styles["product-card-body"]}>
        <h3>{product.title}</h3>
        <h4>{product.brand}</h4>
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductsCard;
