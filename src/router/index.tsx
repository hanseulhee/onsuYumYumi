import { Routes, Route } from "react-router-dom";
import Detail from "pages/Detail";
import Main from "pages/Main";
import Faq from "pages/Faq";
import useGa from "hooks/useGa";

function Router() {
  useGa();
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
  );
}

export default Router;
