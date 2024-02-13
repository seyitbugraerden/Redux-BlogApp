import BlogDetay from "./components/pages/BlogDetay";
import BlogMain from "./components/pages/BlogMain";
import { Routes, Route } from "react-router-dom";
import "./main.css";
import { useSelector } from "react-redux";

function App() {
  const selectedData = useSelector((state) => state.blog.selectedData);
  const preId = selectedData.id;
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogMain />} />
        <Route path={`/detay${preId}`} element={<BlogDetay />} />
        <Route path="*" element={<BlogMain />} />
      </Routes>
    </>
  );
}

export default App;
