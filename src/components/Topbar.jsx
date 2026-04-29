import "../styles/TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">

        <div className="topbar-right">

          <a href="#" className="pqrd">
            Radica tu PQRD
          </a>

          {/* Buscador */}
          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
            <span className="icon">🔍</span>
          </div>

          {/* Links */}
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Oficina Virtual</a>
          <a href="#" className="register">Regístrate</a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;