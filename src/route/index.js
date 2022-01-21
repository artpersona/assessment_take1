import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../shared/contexts/AuthContext";
import {
  Landing,
  Contact,
  Services,
  TechStack,
  FormPage,
} from "../pages/UserPages";
import Register from "../pages/AuthPages/Register";
import Login from "../pages/AuthPages/Login";
import Applicants from "../pages/AdminPages/Applicants";
function index() {
  return <MainNavigation />;
}

const MainNavigation = () => {
  const { loggedUser } = useAuthContext();

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          !loggedUser ? (
            <Navigate to="/home" />
          ) : (
            (loggedUser.role = "admin" ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/home" />
            ))
          )
        }
      />
      <Route path="/home" element={<Landing />} />
      {/* {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/form" element={<FormPage />} />
      <Route path="/applicants" element={<Applicants />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const PrivateRoute = ({ children, redirectTo }) => {
  const { loggedUser } = useAuthContext();

  return loggedUser ? children : <Navigate to={redirectTo} />;
};

export default index;
