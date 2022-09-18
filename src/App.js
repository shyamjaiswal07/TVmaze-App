import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./landingPage";
import GifPage from "./GifPage";

export default function App() {
  const [state, setState] = useState(<GifPage />);
  useEffect(() => {
    let num = 3;
    let timer = setInterval(() => {
      num -= 1;
      if (num === 0) {
        setState(<LandingPage />);
        clearInterval(timer);
      }
    }, 1000);
  }, []);
  return <>{state}</>;
}
