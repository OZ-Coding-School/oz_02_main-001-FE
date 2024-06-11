import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="max-w-[500px] w-full min-h-screen mx-auto relative shadow-layout">
      <Outlet />
    </div>
  );
};

export default Layout;
