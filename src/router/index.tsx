import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "pages/Detail";
import Main from "pages/Main";
import Faq from "components/Faq";

function Router() {
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
