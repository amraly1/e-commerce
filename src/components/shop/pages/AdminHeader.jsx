import React from "react";
import styles from "./AdminHeader.module.css";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <h1> Admin Panel</h1>
          <ul>
            <li>
              <Link to={"/admin/products"}>Browse Products</Link>
            </li>
            <li>
              <Link to={"/"}>Shop</Link>
            </li>
            <li>
              <Link to={"/admin/products/add"}>Add Products</Link>
            </li>
            <li>
              <Link to={"/admin/products/edit"}>Edit Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
