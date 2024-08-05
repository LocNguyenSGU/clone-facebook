import "./index.scss";
import "./style/sprite.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import ContentPage from "./page/Content/ContentPage";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/*" element={<ProtectRoute><ContentPage></ContentPage></ProtectRoute>}></Route>
    </Routes>
    </>
  );
}

export default App;
