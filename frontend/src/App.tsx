import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import QuestionAndAnswer from "./pages/QuestionAndAnswer";
import Record from "./pages/Record";
import Home from "./pages/Home";

function App() {
  return (
    <main className="w-[36%] mx-auto min-h-screen">
      <Navbar />
      <article className="h-[calc(100vh-88px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<Record />} />
          <Route path="/qa" element={<QuestionAndAnswer />} />
        </Routes>
      </article>
    </main>
  );
}

export default App;
