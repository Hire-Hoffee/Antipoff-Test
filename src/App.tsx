import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
