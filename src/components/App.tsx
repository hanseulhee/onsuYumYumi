import Router from "router";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Router />
    </>
  );
}

export default App;
