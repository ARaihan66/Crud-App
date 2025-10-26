import { Routes, Route } from "react-router";
import "./App.css";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
