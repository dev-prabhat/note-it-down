import { LandingPage } from "./pages/index";
import {Routes, Route} from "react-router-dom"
import "./common.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
