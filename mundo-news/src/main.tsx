import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import App from "/src/App"

import "/src/index.css"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
