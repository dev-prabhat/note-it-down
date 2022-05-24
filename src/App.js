import { Archive, Home, LandingPage, Mock, Trash,Login, ProfilePage, SignUp } from "./pages/index";
import {Routes, Route} from "react-router-dom"
import { PrivateRoute,AuthRoute, Loading } from "./components";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./context";
import "./common.css"

function App() {
  const {theme} = useTheme()
  return (
    <div className={`${theme === "light" ? "dark-theme" : "light-theme"}`}>
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
    </div>
  );
}

export default App;
