import "./App.css";
import { Header } from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full pt-20">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
