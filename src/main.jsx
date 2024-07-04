import ReactDOM from "react-dom/client";
import Index from "./Routes/Index.jsx";
import "./style/index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { register } from "../registerServiceWorker.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Index />
  </ThemeProvider>
);

register();
