import "./App.css"
import Home from "./pages/Home"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./utils/Theme"
import GlobalState from "./context/GlobalState"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <GlobalState>
        <ThemeProvider theme={theme}>
          <Toaster />
          <Home />
        </ThemeProvider>
      </GlobalState>
    </>
  )
}

export default App
