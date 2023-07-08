import "./NavBar.css";
import logo from "../../logo-no-background.png";
import CartWidget from "../cartWidget/CartWidget";

function NavBar() {
    return (
        <header className="app-header">
            <a href="#top">
                <img
                    src={logo}
                    className="app-logo animate__animated animate__backInDown"
                    alt="logo"
                />
            </a>
            <nav
                className="navbar navbar-dark navbar-expand-lg"
                style={{ backgroundColor: "#403B33" }}
            >
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#top">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#top">
                                    Platos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#top">
                                    Bebidas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#top">
                                    Postres
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#top">
                                    Promociones
                                </a>
                            </li>
                            <li className="nav-item">
                                <CartWidget cantidad="2" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
