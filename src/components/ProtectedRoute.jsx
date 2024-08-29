import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("userEmail");

  return email ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
