import React,{useState , useEffect} from "react";
import "./App.css";
import LandingPage from './landingPage';
import GifPage from "./GifPage";
import Footer from "./component/Footer";

export default function App() {
 const[state , setState] = useState(<GifPage/>);
 useEffect(()=>{
let num = 3;
setInterval(() => {
  num -= 1;
  if(num===0){
    setState(<LandingPage/>);
  }
}, 1000);
 },[])
  return (
    <>
    {state}
    <Footer/>
    </>
  );
}
