import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import auth from "../../services/authService";

// TODO: finish protected route element

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      element={
        !auth.getCurrentUser() ? (
          <Navigate to="/login" replace />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
