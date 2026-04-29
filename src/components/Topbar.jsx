import "../styles/TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container ">
        <div className="topbar-right">
          <a href="#" className="pqrd">
            <a href="#" className="pqrd">
              <strong className="nabvar-strong">
                Radica tu <br className="mobile-break" /> PQRD
              </strong>
            </a>
          </a>

          {/* Buscador */}
          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
            <span className="icon">🔍</span>
          </div>

          {/* Links */}
          <a href="#">
            Preguntas <br className="mobile-break" />
            Frecuentes
          </a>
          <a href="#">
            Oficina <br className="mobile-break" />
            Virtual
          </a>
          <a href="#" className="register">
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
