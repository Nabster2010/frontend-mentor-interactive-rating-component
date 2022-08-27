import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeedBack from "./pages/FeedBack";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="done" element={<FeedBack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
