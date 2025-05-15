import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex justify-start items-start bg-gray-100 p-2">
        <ul className="flex justify-start items- gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center p-4">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;