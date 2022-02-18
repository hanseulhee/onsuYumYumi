import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "pages/Detail";
import Main from "pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
