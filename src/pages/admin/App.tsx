import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import { MainContext } from "../../context/Maincontext";
import Footer from "../../components/footer/Footer";

function App() {
  const { theme } = useContext(MainContext);

  return (
    <div id="app" className={theme}>
      <div className="content-wrapper">
        <nav className="nav-bar text-bg-dark">
          <Navbar />
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
