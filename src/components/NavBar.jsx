import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg nav-underline">
            <div className="container-fluid">
              <span className="navbar-brand">
                Movie App
              </span>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="navbar-nav">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>                    
                  <Link to="/contactus" className="nav-link">Contact Us</Link>
                  <Link to="/add" className="nav-link">Add Movie</Link>
                </div>
              </div>
            </div>
        </nav>
        <Outlet></Outlet>
    </>
  )
}

export default NavBar