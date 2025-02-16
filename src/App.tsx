import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";
import Register from "./components/SignUpPage/SignUp";
import Login from "./components/LoginPage/Login";
import Logo from "./components/logo/logo";
import Admin from "./components/AdminPage/Admin";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
