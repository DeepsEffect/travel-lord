import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div className="font-mont">
      <div className="absolute z-10 w-full">
        <Nav></Nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
