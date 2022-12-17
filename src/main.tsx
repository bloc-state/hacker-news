import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import { BrowserRouter } from "react-router-dom"
import { AppBlocObserver } from "./app-bloc-observer"
import "./App.css"
import App from "./pages/App"
import { Bloc } from "@bloc-state/bloc"
import { registerModules } from "@bloc-state/react-bloc"
import { PostModule } from "./modules"

Bloc.observer = new AppBlocObserver()

registerModules([PostModule])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
