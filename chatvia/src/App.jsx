import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth/Auth";
import  { Toaster } from "react-hot-toast";


import './index.css'

function App() {
  return (
    <>
     
      
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
