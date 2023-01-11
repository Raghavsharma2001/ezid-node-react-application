import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import SignUpPage from "./routes/sign-up/sign-up.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
