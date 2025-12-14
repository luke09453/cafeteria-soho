import "./Desayuno.css";

export default function Desayuno() {
  return (
    <>
      <header className="desayuno-header">
        <h1>Desayunos</h1>
        <p>De 8:00 A.M. a 11:00 A.M. — Hechos con el sabor del café recién molido ☕</p>
      </header>

      <section className="menu-section">
        <div className="menu-grid">

          <div className="card">
            <img src="/desayuno.png" alt="Paquete desayuno" />
            <div className="card-content">
              <h2>Paquete <span className="price">$97</span></h2>
              <ul>
                <li>Café de olla o té</li>
                <li>Fruta o pan dulce</li>
                <li>Jugo</li>
                <li>Huevo con jamón, salchicha o a la mexicana</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="/huevo.png" alt="Huevos al gusto" />
            <div className="card-content">
              <h2>Huevos al gusto</h2>
              <ul>
                <li>Huevo con jamón <span className="price">$55</span></li>
                <li>Huevo con salchicha <span className="price">$55</span></li>
                <li>Huevo a la mexicana <span className="price">$55</span></li>
                <li>Huevos bañados <span className="price">$60</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="/chilaquiles.png" alt="Chilaquiles" />
            <div className="card-content">
              <h2>Chilaquiles <span className="price">$55 - $75</span></h2>
              <ul>
                <li>Sencillos $55</li>
                <li>Con huevo $60</li>
                <li>Con pollo $68</li>
                <li>Con res $75</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="/molletes.png" alt="Molletes" />
            <div className="card-content">
              <h2>Molletes <span className="price">$60</span></h2>
              <ul>
                <li>2 piezas con frijoles refritos, jamón y manchego</li>
                <li>Extra chorizo +$10</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <img src="/cuernitos.png" alt="Cuernitos y Sandwich" />
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
            <img src="/ensaladas.png" alt="Ensaladas" />
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
            <img src="/sincronizadas.png" alt="Sincronizadas" />
            <div className="card-content">
              <h2>Sincronizadas <span className="price">$55</span></h2>
              <p>Orden con 2 piezas rellenas de queso manchego y jamón, acompañadas de pico de gallo.</p>
            </div>
          </div>

          <div className="card">
            <img src="/coctel.png" alt="Cóctel de frutas" />
            <div className="card-content">
              <h2>Cóctel de frutas <span className="price">$60</span></h2>
              <p>Mezcla de frutas de temporada acompañada de miel, granola, chantilly o yogurt.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
