import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programming from "./pages/Programming";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
