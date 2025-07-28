// React [https://react.dev]
import React from "react"
import ReactDOM from "react-dom/client"

// Mantine UI [https://mantine.dev/]
import { createTheme, MantineProvider, Input } from "@mantine/core"
import "@mantine/core/styles.css"


import "./index.css"
import App from "./App.jsx"

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: "unstyled"
      },
    }),
    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    }),
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={ theme }>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)