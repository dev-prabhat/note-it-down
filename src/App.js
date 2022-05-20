import { Archive, Home, Labels, LandingPage, Mock, Trash,Login } from "./pages/index";
import {Routes, Route} from "react-router-dom"
import "./common.css"
import { PrivateRoute,AuthRoute, Loading } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster/>
      <Loading/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        
        <Route element={<PrivateRoute/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/archive" element={<Archive/>}/>
          <Route path="/labels" element={<Labels/>}/>
          <Route path="/trash" element={<Trash/>}/>
        </Route> 

        <Route element={<AuthRoute/>}> 
          <Route path="/login" element={<Login/>}/>
        </Route>

        <Route path="/mock" element={<Mock/>}/>
      </Routes>
    </>
  );
}

export default App;
