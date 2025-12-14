import Desayuno from "./Desayuno";
import Comida from "./Comida";
import Bebidas from "./Bebidas";
import './Main.css';

function Main({ seccion }) {
  return (
    <main>
      {seccion === "inicio" && (
        <div className="inicio-container page-content">
          <img src="/public/IzquieraCafe.jpg" alt="Café" className="side-img" />

          <div className="central-box">
            <h1>Bienvenido a Cafetería SOHO</h1>
            <p>
              Disfruta de nuestros desayunos, comidas y bebidas.
              <br />
              ¡Un lugar para relajarte y consentirte!
            </p>
          </div>

          <img src="/public/DerechaCafe.jpg" alt="Café" className="side-img" />
        </div>
      )}

      {seccion === "desayuno" && (
        <div className="desayuno-container page-content">
          <Desayuno />
        </div>
      )}

      {seccion === "comida" && (
        <div className="comida-container page-content">
          <Comida />
        </div>
      )}

      {seccion === "bebidas" && (
        <div className="bebidas-container page-content">
          <Bebidas />
        </div>
      )}
    </main>
  );
}

export default Main;
