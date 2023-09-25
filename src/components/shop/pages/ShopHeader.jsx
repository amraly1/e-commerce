import React from "react";
import styles from "./ShopHeader.module.css";
import { Link } from "react-router-dom";
function ShopHeader({ searchInput, handleSearch }) {
  return (
    <header className={styles.header}>
      <Link to="./admin">Admin Panel</Link>
      <div>
        <input
          type="search"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}

export default ShopHeader;
