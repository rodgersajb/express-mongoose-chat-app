import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ChatProvider>
        <App />
        <Toaster position="top-center" />
      </ChatProvider>
    </Router>
  </React.StrictMode>
);
