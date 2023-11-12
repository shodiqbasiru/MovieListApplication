import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const root = document.getElementById("root");
createRoot(root).render(<App />);
