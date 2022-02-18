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

  return <div>YAWAAA</div>;
};

const PrivateRoute = ({ children, redirectTo }) => {
  const { loggedUser } = useAuthContext();

  return loggedUser ? children : <Navigate to={redirectTo} />;
};

export default index;
