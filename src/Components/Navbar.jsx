import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-3">
                                <Link className="text-decoration-none text-dark" to={"/"}>Home</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="text-decoration-none text-dark" to={"/About"}>About Us</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="text-decoration-none text-dark" to={"/Couses"}>Couses</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="text-decoration-none text-dark" to={"/Blogs"}>Blogs</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="text-decoration-none text-dark" to={"/Contact"}>Contact Us</Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;