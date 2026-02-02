import { Link } from "react-router-dom";
import { getRole, logout } from "../auth/auth";

function Navbar() {
  const role = getRole();

  return (
    <header className="header">
      <div className="logo">🛒 ServerlessMart</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        {!role && <Link to="/login">Login</Link>}
        {role === "TENANT" && <Link to="/tenant">Tenant</Link>}
        {role === "USER" && <Link to="/user">User</Link>}
      </nav>

      {role && (
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Navbar;
