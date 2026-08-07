import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="border-bottom">
      <div className="container d-flex align-items-center gap-4">
        <Link to="/" className="text-dark text-decoration-none fw-bold fs-5">
          Seuss Treasury
        </Link>
        <nav className="d-flex gap-3">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-decoration-none ${isActive ? 'text-dark' : 'text-secondary'}`
            }>Books
          </NavLink>

          <NavLink 
            to="/quotes" 
            className={({ isActive }) => 
              `text-decoration-none ${isActive ? 'text-dark' : 'text-secondary'}`
            }
          >Quotes
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;