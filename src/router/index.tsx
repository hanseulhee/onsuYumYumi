import useGa from "hooks/useGa";
import Detail from "pages/Detail";
import Faq from "pages/Faq";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";

function Router() {
  useGa();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:name" element={<Detail />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
