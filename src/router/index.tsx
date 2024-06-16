import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import TeamList from "@/pages/TeamList";
import TeamMember from "@/pages/TeamMember";
import Registration from "@/pages/Registration";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "team",
        element: <TeamList />,
      },
      {
        path: "member/:id",
        element: <TeamMember />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
