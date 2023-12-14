
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/image" className="hover:text-gray-300">Image</Link>
            </li>
            <li>
              <Link to="/sentiment" className="hover:text-gray-300">Sentiment</Link>
            </li>
            <li>
              <Link to="/emotion" className="hover:text-gray-300">Emotion</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
