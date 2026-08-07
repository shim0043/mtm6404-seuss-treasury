import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div>
        <Link to="/">Seuss Treasury</Link>
        
        <nav>
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