import React from "react";
import ReactDOM from "react-dom/client"; // Change this line
import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
root.render(<App />); // Use the root to render your App
// registerServiceWorker();
