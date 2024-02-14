import BlogDetay from "./components/pages/BlogDetay";
import BlogMain from "./components/pages/BlogMain";
import { Routes, Route } from "react-router-dom";
import "./main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogMain />} />
        <Route path="/detay/:id" element={<BlogDetay />} />
        <Route path="*" element={<BlogMain />} />
      </Routes>
    </>
  );
}

export default App;
