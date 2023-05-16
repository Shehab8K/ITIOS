import { NavLink } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid row">
              <ul class="navbar-nav col-6 offset-3 fw-bold d-flex justify-content-between">
                <li class="nav-item"><p className="nav-link"><NavLink to="/">Home</NavLink></p></li>
                <li class="nav-item"><p className="nav-link"><NavLink to="/studentDetails/5">Student Details</NavLink></p></li>
                <li class="nav-item"><p className="nav-link"><NavLink to="/profile">Profile</NavLink></p></li>
                <li class="nav-item"><p className="nav-link"><NavLink to="/habalola">Error</NavLink></p></li>
              </ul>
          </div>
        </nav>
    )
}
export default Navbar