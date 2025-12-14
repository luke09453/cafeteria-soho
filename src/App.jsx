import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [seccion, setSeccion] = useState("inicio");

  return (
    <>
      <Header setSeccion={setSeccion} />
      <Main seccion={seccion} />
      <Footer />
    </>
  );
}

export default App;
