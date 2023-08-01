import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full bg-black pt-20">
      <Header />
      <div className="bg-white ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
