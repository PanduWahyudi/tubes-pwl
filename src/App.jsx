/* eslint-disable no-unused-vars */
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LupaKataSandi from "./pages/lupaKataSandi";
import CreateAccount from "./pages/buatAkun";
import SendOtp from "./pages/kirimOtp";
import NewPassword from "./pages/buatPassword";
import Tes from "./pages/tes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lupa-kata-sandi" element={<LupaKataSandi />} />
        <Route path="/buat-akun" element={<CreateAccount />} />
        <Route path="/kode-otp" element={<SendOtp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </Router>
  );
};

export default App;
