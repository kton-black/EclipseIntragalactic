import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SignIn from "./components/SignIn/signin";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import BookFlight from "./components/BookFlight/BookFlight";
import {Container} from 'react-bootstrap';
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Switch
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (

      /*
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/bookflight" component={BookFlight} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
   */
    <Router>
    
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Preloader load={load} />
      
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/about" element={<About />} />
          <Route path="/bookflight" element={<BookFlight />} />
          <Route path="/sign-in" component={<SignIn/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        
        <Footer />
        
      </div>
    
    </Router>
    
  



  );
}

export default App;
