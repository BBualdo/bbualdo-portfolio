import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Music from "./pages/Music";

const App = () => (
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
