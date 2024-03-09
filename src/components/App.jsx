import ForgotPassword from "page/ForgotPassword/ForgotPassword";
import Login from "page/Login/Login";
import ResetPassword from "page/ResetPassword/ResetPassword";
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};
