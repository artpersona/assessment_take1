import React from "react";
import "./Landing.css";
import { Navbar } from "../../../components/UserComponents";
import banner from "../../../assets/images/website_banner.jpg";
import UserLayout from "../../../layout/UserLayout";
function Landing() {
  return (
    <UserLayout>
      <div className="page_banner">
        <img src={banner} alt="avatar" className="banner" />
      </div>
    </UserLayout>
  );
}

export default Landing;
