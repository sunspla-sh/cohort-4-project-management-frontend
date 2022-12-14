import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
 
function Navbar() {

  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <button>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
      )}
 
      
    </nav>
  );
}
 
export default Navbar;