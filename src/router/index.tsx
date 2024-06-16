import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import TeamList from "@/pages/TeamList";
import TeamMember from "@/pages/TeamMember";

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
    ],
  },
]);

export default router;
