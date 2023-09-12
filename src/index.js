import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Parent from "./Parent";
import Users from "./Users";
import User from "./User";
import withLogInfo from "./withLogInfo";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
// const UserWithLogInfo =
//   withLogInfo(User);

root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);
