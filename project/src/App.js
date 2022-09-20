import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Login from "./components/Login";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
