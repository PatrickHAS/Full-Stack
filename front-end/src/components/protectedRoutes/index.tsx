import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLoginContext } from "../../contexts/login";

const ProtectedRoutes = () => {
  const { loading, token } = useLoginContext();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
