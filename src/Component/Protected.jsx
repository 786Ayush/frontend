import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const encryptedUser = Cookies.get("encryptedUser");

  // Check if encrypted user data exists
  if (!encryptedUser) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default Protected;
