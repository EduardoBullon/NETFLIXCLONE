import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <h1 className="logo">
          <img src="/netflix.png" alt="Netflix Logo" width="60" />
          NETFLIX
        </h1>
        <ul className="nav-list">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/items">PELICULAS</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
