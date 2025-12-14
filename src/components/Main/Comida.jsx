import "./Comida.css";

function Comida() {
  return (
    <>
      <header className="comida-header">
        <h1>Comidas a la carta</h1>
        <p>un deleite para tu estómago</p>
      </header>

      <section className="menu-section">
        <div className="menu-grid">

          <div className="card">
            <img src="Chilaquiles.jpg" alt="Chilaquiles" />
            <div className="card-content">
              <h2>Chilaquiles</h2>
              <h3>Acompañados de frijoles refritos y bolillo.</h3>
              <ul>
                <li>Sencillos <span className="price">$55</span></li>
                <li>Huevo <span className="price">$55</span></li>
                <li>Pollo <span className="price">$55</span></li>
                <li>Res <span className="price">$55</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="Chapatas.jpg" alt="Chapatas" />
            <div className="card-content">
              <h2>Chapatas</h2>
              <h3>Preparada con frijoles, pepino, manzana, queso panela, lechuga y proteína a escoger.</h3>
              <ul>
                <li>Pollo <span className="price">$95</span></li>
                <li>Jamón <span className="price">$85</span></li>
                <li>Atún <span className="price">$95</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="Enchiladas.jpg" alt="Enchiladas" />
            <div className="card-content">
              <h2>Enchiladas</h2>
              <ul>
                <li>Verdes <span className="price">$75</span></li>
                <li>Mole <span className="price">$85</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="TacosDorados.jpg" alt="Tacos Dorados" />
            <div className="card-content">
              <h2>Tacos Dorados <span className="price">$55</span></h2>
              <h3>Tacos rellenos de pollo, acompañados de lechuga, crema y queso.</h3>
            </div>
          </div>

          <div className="card">
            <img src="CuernitoSandwich.jpg" alt="Cuernitos y Sandwich" />
            <div className="card-content">
              <h2>Cuernitos y Sándwich</h2>
              <ul>
                <li>Jamón con queso <span className="price">$45</span></li>
                <li>Pollo con queso <span className="price">$50</span></li>
                <li>Ensalada de atún <span className="price">$50</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="Ensaladas.jpg" alt="Ensaladas" />
            <div className="card-content">
              <h2>Ensaladas <span className="price">$90</span></h2>
              <p>Preparada con lechuga, pepino, fruta de temporada, semillas, frutos secos, queso y proteína a escoger:</p>
              <ul>
                <li>Pollo</li>
                <li>Res</li>
                <li>Atún</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="Milanesa.jpg" alt="Milanesa" />
            <div className="card-content">
              <h2>Milanesa <span className="price">$90</span></h2>
              <p>Filete de pollo o res, empanizado acompañado de ensalada mixta y sopa fría.</p>
            </div>
          </div>

          <div className="card">
            <img src="CoctelDeFrutas.jpg" alt="Coctel de frutas" />
            <div className="card-content">
              <h2>Coctel de frutas <span className="price">$60</span></h2>
              <p>Mezcla de frutas de temporada acompañada de miel, granola, chantilly o yogurt.</p>
            </div>
          </div>

          <div className="card">
            <img src="ConsomeVerdura.jpg" alt="Consome de verduras" />
            <div className="card-content">
              <h2>Consomé de verduras <span className="price">$28</span></h2>
            </div>
          </div>

          <div className="card">
            <img src="Sincronizadas.jpg" alt="Sincronizadas" />
            <div className="card-content">
              <h2>Sincronizadas <span className="price">$55</span></h2>
              <p>Orden con 2 piezas rellenas de queso manchego y jamón, acompañadas con Pico de Gallo.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Comida;
