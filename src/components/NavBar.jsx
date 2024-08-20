import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/add">Add Movie</Link>
        </nav>
        <Outlet></Outlet>
    </>
  )
}

export default NavBar