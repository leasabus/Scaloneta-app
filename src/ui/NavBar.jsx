import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <header>
            <div className="navbar-container">
                <nav>
                    <li>
                        <Link className="navlink"
                            to="home">Inicio</Link>
                    </li>
                    <li>
                        <Link className="navlink " to="arqueros">Arqueros</Link>
                    </li>
                    <li>
                        <Link className="navlink " to="defensores">Defensores</Link>
                    </li>
                    <li>
                        <Link className="navlink " to="volantes">Volantes</Link>
                    </li>
                    <li>
                        <Link className="navlink " to="delanteros">Delanteros</Link>
                    </li>
                    <li>
                        <Link className="navlink " to="search">Buscador</Link>
                    </li>
                </nav>
            </div>

        </header>
    )
}
