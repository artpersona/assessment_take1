import React from "react";
import { Navbar } from "../components/UserComponents";
import "./User.css";
function UserLayout({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}

export default UserLayout;
