import "./Bebidas.css";

export default function Bebidas() {
  return (
    <>
      <header className="bebidas-header">
        <h1>Bebidas</h1>
        <p>El sabor que despierta tus días</p>
      </header>

      <section className="menu-section">
        <div className="menu-grid">

          {/* BEBIDAS CALIENTES */}
          <div className="card">
            <img src="/cafe.png" alt="café" />
            <div className="card-content">
              <h3>Bebidas Calientes</h3>
              <ul>
                <li>Americano <span className="price">$35 / $48</span></li>
                <li>Espresso <span className="price">$20</span></li>
                <li>Café de olla <span className="price">$35</span></li>
                <li>Chocolate caliente <span className="price">$45</span></li>
                <li>Capuchino clásico <span className="price">$40 / $53</span></li>
                <li>Latte clásico <span className="price">$40 / $53</span></li>
                <li>Jarabes <span className="price">+$10</span></li>
                <li>Carga extra <span className="price">+$10</span></li>
                <li>Leche deslactosada <span className="price">+$5</span></li>
              </ul>
            </div>
          </div>

          {/* TÉ */}
          <div className="card">
            <img src="/te.png" alt="té" />
            <div className="card-content">
              <h3>Té</h3>
              <p>Caliente <span className="price">$25</span></p>
              <p>Frío <span className="price">$35</span></p>
              <ul>
                <li>Manzanilla</li>
                <li>Verde</li>
                <li>Frutos rojos</li>
                <li>Mango-fresa</li>
              </ul>
            </div>
          </div>

          {/* TIZANAS */}
          <div className="card">
            <img src="/tizana.png" alt="tizana" />
            <div className="card-content">
              <h3>Tizanas</h3>
              <ul>
                <li>Caliente <span className="price">$45</span></li>
                <li>Fría <span className="price">$55</span></li>
                <li>Infusión de frutas</li>
                <li>Mezcla de sabores</li>
              </ul>
            </div>
          </div>

          {/* FRAPEÉ */}
          <div className="card">
            <img src="/frapee.png" alt="frappé" />
            <div className="card-content">
              <h3>Frapeé</h3>
              <p>Precio base <span className="price">$70</span></p>
              <ul>
                <li>Clásico</li>
                <li>Vainilla</li>
                <li>Moka</li>
                <li>Crema irlandesa</li>
                <li>Chocolate</li>
                <li>Oreo <span className="price">$75</span></li>
                <li>Leche deslactosada <span className="price">+$5</span></li>
              </ul>
            </div>
          </div>

          {/* SODA ITALIANA */}
          <div className="card">
            <img src="/italiana.png" alt="soda italiana" />
            <div className="card-content">
              <h3>Soda Italiana</h3>
              <p>Agua mineral + jellys + jarabe:</p>
              <ul>
                <li>Mora azul</li>
                <li>Frutos rojos</li>
                <li>Maracuyá</li>
              </ul>
            </div>
          </div>

          {/* LICUADOS */}
          <div className="card">
            <img src="/licuados.png" alt="licuados" />
            <div className="card-content">
              <h3>Licuados <span className="price">$32</span></h3>
              <ul>
                <li>Fresa</li>
                <li>Plátano</li>
                <li>Chocolate</li>
                <li>Nuez</li>
                <li>Avena</li>
                <li>Ingrediente extra <span className="price">+$5</span></li>
              </ul>
            </div>
          </div>

          {/* EXTRAS */}
          <div className="card">
            <img src="/refrescos.png" alt="extras" />
            <div className="card-content">
              <h3>Extras</h3>
              <ul>
                <li>Agua Frutal (L <span className="price">$45</span> / ½ <span className="price">$25</span>)</li>
                <li>Naranjada Mineral <span className="price">$50</span></li>
                <li>Agua embotellada (L <span className="price">$19</span> / ½ <span className="price">$16</span>)</li>
                <li>Coca-Cola 350ml <span className="price">$30</span></li>
                <li>Coca-Cola s/a 350ml <span className="price">$30</span></li>
                <li>Mundet 355ml <span className="price">$30</span></li>
                <li>Sprite <span className="price">$30</span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

