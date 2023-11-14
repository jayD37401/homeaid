import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./Components/Sidebar.jsx";
export default function dash_app() {
  return (
    <Div className="t">
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  background-color: black;
  font-family: "Montserrat", sans-serif;
  opacity: 1 !important;
  visibility: visible !important;
  right: 0 !important;
`;
