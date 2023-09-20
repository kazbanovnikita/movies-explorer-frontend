import { useNavigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
    const navigate = useNavigate()
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    navigate('/')
  );
}

export default ProtectedRoute;
