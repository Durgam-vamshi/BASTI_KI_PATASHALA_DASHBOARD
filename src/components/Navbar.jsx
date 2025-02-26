







import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Charity Website</h1>
        <ul className="flex space-x-6 items-center">
          <li>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-light-border dark:hover:bg-dark-border transition">
              {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </li>
          {user ? (
            <>
              <li>Welcome, {user.name}!</li>
              <li>
                <button
                  onClick={logout}
                  className="bg-light-secondary dark:bg-dark-secondary text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-light-secondary dark:text-dark-secondary hover:underline"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-light-secondary dark:bg-dark-secondary text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


