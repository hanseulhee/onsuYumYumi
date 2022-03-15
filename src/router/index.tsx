import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "pages/Detail";
import Main from "pages/Main";
import Faq from "pages/Faq";
import useGa from "hooks/useGa";

function Router() {
  useGa();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
