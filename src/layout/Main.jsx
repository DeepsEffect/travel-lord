import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative">
      <h2 className="text-white text-center absolute top-0 left-0 right-0 z-10">This is Navbar</h2>
      <Outlet />
    </div>
  );
};

export default Main;
