import { Archive, Home, LandingPage, Mock, Trash,Login, ProfilePage, SignUp } from "./pages/index";
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
          <Route path="/trash" element={<Trash/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route> 

        <Route element={<AuthRoute/>}> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>} />
        </Route>

        <Route path="/mock" element={<Mock/>}/>
      </Routes>
    </>
  );
}

export default App;
