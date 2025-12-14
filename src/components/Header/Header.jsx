import "./Header.css";

function Header({ setSeccion }) {
  return (
    <header>
      <div className="header-left" onClick={() => setSeccion("inicio")}>
        <img
          src="/Logo_SOHO.jpeg"
          alt="Logo Cafetería SOHO"
          className="header-logo"
        />
        <h1>Cafetería SOHO</h1>
      </div>

      <nav>
        <button onClick={() => setSeccion("inicio")}>Inicio</button>
        <button onClick={() => setSeccion("desayuno")}>Desayuno</button>
        <button onClick={() => setSeccion("comida")}>Comida</button>
        <button onClick={() => setSeccion("bebidas")}>Bebidas</button>
        <button onClick={() => window.open("/menu.pdf", "_blank")}>
          Descargar Menú
        </button>
        <button onClick={() => window.open("https://maps.google.com", "_blank")}>
          Ubicación
        </button>
      </nav>
    </header>
  );
}

export default Header;

