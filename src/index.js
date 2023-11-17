import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ThingSpeakData from "./ThingSpeakData";
import Navbar from "./Navbar.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
import SignUp from "./SignUp";
import Loginn from "./Loginn";
import Grafica from "./Grafica.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(true);

  const switchToLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const switchToSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Navbar />
        
        {isAuthenticated ? (
          <>
            <ThingSpeakData />
          </>
        ) : showLogin ? (
          <Loginn onswitchToSignUp={switchToSignUp} setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <SignUp onswitchToLogin={switchToLogin} onSwitchToLogin={switchToLogin} />
        )}
      </StyledEngineProvider>
    </React.StrictMode>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
