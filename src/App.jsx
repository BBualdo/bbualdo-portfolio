import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Music from "./pages/Music";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
