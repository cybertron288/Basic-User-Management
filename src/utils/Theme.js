import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7a7a7a",
    },
    secondory: {
      main: "#008ef4",
      contrastText: "#ffffff",
    },
  },
})

export default theme
