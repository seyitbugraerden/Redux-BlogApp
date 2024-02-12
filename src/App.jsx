import BlogDetay from "./components/BlogDetay";
import BlogMain from "./components/BlogMain";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogMain />} />
        <Route path="/detay" element={<BlogDetay />} />
        <Route path="*" element={<BlogMain />} />
      </Routes>
    </>
  );
}

export default App;
