import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "../admin/AdminFooter";
function Admin() {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
}

export default Admin;
