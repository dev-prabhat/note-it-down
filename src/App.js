import { Archive, Home, Labels, LandingPage, Mock, Trash,Login } from "./pages/index";
import {Routes, Route} from "react-router-dom"
import "./common.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/labels" element={<Labels/>}/>
        <Route path="/trash" element={<Trash/>}/>
        <Route path="/mock" element={<Mock/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
