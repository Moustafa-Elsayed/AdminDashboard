import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Team from "./pages/team/Team.jsx";
import Invioces from "./pages/invioces/Invioces.jsx";
import Geography from "./pages/geography/Geography.jsx";
import Linechart from "./pages/lineChart/Linechart.jsx";
import Piechart from "./pages/pieChart/Piechart.jsx";
import Barchart from "./pages/barChart/Barchart.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Calender from "./pages/calender/Calender.jsx";
import Form from "./pages/form/Form.jsx";
import Contact from "./pages/contacts/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="invioces" element={<Invioces />} />
      <Route path="profile" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="barchart" element={<Barchart />} />
      <Route path="piechart" element={<Piechart />} />
      <Route path="linechart" element={<Linechart />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
