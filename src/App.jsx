import Website from "./Website.jsx";
import "../src/App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Services from "./Pages/Services/Services.jsx";
import SignUP from "./Login/SignUP.jsx";
import Service from "./Pages/Service/Service.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Authentication from "./Login/Authentication.jsx";
import GigCreate from "./components/Gig/GigCreate.jsx";
import Dashboard from "./Dashboardm/dash_app.jsx";
import Metamask from "./components/Metamask/Metamask.jsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
            <Route path="/" element={<Website />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/signin" element={<Authentication />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<GigCreate />} />
            <Route path="/metamask" element={<Metamask />} />
            <Route path="/service">
              <Route index element={<Services />} />
              <Route path=":serviceId" element={<Service />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
