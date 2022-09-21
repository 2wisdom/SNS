import React from "react";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/SignUp/" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
