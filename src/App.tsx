import { Route, Routes } from "react-router-dom";
import { HomePage, InvitationPage, LoginPage, RegisterPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/invitation" element={<InvitationPage />} />
    </Routes>
  );
}

export default App;
