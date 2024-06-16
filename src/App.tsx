import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/team");
    }

    if (
      !localStorage.getItem("token") &&
      location.pathname !== "/login" &&
      location.pathname !== "/registration"
    ) {
      navigate("/login");
    }
  }, [navigate, location.pathname]);

  return <>{localStorage.getItem("token") ? <Outlet /> : <NavLink to="/login" />}</>;
}

export default App;
