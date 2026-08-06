import { createRoot } from "react-dom/client"

import App from "/src/App"

import "/src/index.css"

const rootElem = document.getElementById("root")!
createRoot(rootElem).render(<App />)
