import { Outlet } from "react-router-dom";
import Navbar from "./sheard/Navbar/Navbar";
import Footer from "./sheard/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;