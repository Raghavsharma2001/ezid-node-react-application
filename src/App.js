import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./component/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignUpPage from "./routes/sign-up/sign-up.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
