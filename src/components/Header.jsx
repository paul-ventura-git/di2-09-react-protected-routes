import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user } = useContext(AuthContext);
    const { logout } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true" to="/disabled">
                  Disabled
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {!user && (
                <>
                  <Link className="nav-link active" aria-current="page" to="/login">
                    <button className="btn btn-outline-primary me-2 fw-semibold">Login</button>
                  </Link>
                  <Link className="nav-link active" aria-current="page" to="/register">
                    <button className="btn btn-outline-success me-2 fw-semibold">Register</button>
                  </Link>
                </>
              )}

              {user && (
                <Link className="nav-link active" aria-current="page" to="/logout">
                  <button className="btn btn-outline-danger me-2 fw-semibold" onClick={logout}>Log out</button>
                </Link>
              )}
                            
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
