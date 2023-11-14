import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Authentication from "./Login/Authentication";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Metamask from "./components/Metamask/Metamask";
import SignUP from "./Login/SignUP";
import Dash from "./Dashboardm/dash_app";
import GigCreate from "./components/Gig/GigCreate";
import GigOverview from "./components/Gig/GigOverview";
import GigPrice_desc from "./components/Gig/GigPrice_desc";
import GigPublish from "./components/Gig/GigPublish";
import Website from "./Website";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Authentication",
    element: <Authentication />,
  },
  {
    path: "/SignUP",
    element: <SignUP />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Metamask",
    element: <Metamask />,
  },
  {
    path: "/Dashboard",
    element: <Dash />,
  },
  {
    path: "/GigCreate",
    element: <GigCreate />,
  },
  {
    path: "/GigOverview",
    element: <GigOverview />,
  },
  {
    path: "/GigPrice_desc",
    element: <GigPrice_desc />,
  },
  {
    path: "/GigPublish",
    element: <GigPublish />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
