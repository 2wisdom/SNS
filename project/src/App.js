import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SignUp />
      </div>
    </ThemeProvider>
  );
}

export default App;
