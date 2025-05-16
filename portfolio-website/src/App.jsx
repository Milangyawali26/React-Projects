import { Outlet } from "react-router";
import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Aside />
      <div className="main-content">
        {" "}
        <Navbar></Navbar>
        <section className="scroll-smooth">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
