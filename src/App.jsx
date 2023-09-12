import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CartWidget from "./components/NavBar/CartWidget";
import image1 from './assets/Buzo-1.png';
import image2 from './assets/Buzo-2.png';
import image3 from './assets/Buzo-3.jpg';
import image4 from './assets/Remera-1.png';
import image5 from './assets/Remera-2.jpg';
import image6 from './assets/Remera-3.jpg';
import image7 from './assets/Accesorio-1.png';
import image8 from './assets/Accesorio-2.png';
import image9 from './assets/Accesorio-3.jpg';




const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/home" element={<Home greeting={'Troles Indumentaria'} welcome={"Indumentaria con diseños únicos y de excelente calidad."} />} />
        <Route exact path="/about" element={<About about={"Somos una pequeña tienda en busca de grandes aspiraciones."}
          security={"Te garantizamos una compra segura y excelente condiciones de envio, asegurándonos que recibas lo que compraste."}
          shipping={"Envíos a todo el país."}
          quality={"La indumentaria es 100% algodón y de excelente calidad."} />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<ItemListContainer products={[{id: 1, title: "Buzo Troles 1", description: "Buzo negro con el logo en el centro y el Troles en la capucha.", price: 9000, image: image1, category: "Buzos"},
          {id: 2, title: "Buzo Troles 2", description: "Buzo negro con el logo en el centro y el Troles en el bolsillo.", price: 9000, image: image2, category: "Buzos"},
          {id: 3, title: "Buzo Troles 3", description: "Buzo negro con el Troles en el frente a la izquierda y el logo en la espalda.", price: 9000, image: image3, category: "Buzos"},
          {id: 4, title: "Remera Troles 1", description: "Remera negra con el Troles a la izquierda y el logo en la espalda.", price: 5000, image: image4, category: "Remeras"},
          {id: 5, title: "Remera Troles 2", description: "Remera negra con el logo en el centro y el Troles en la nuca.", price: 5000, image: image5, category: "Remeras"},
          {id: 6, title: "Remera Troles 3", description: "Remera negra con el logo a la izquiera y el Troles en la nuca.", price: 5000, image: image6, category: "Remeras"},
          {id: 7, title: "Gorrito Troles", description: "Gorrito negro de lana con el logo en frente y el Troles detrás.", price: 3000, image: image7, category: "Accesorios"},
          {id: 8, title: "Gorra Troles", description: "Gorra negra con el logo en el frente y el Troles detrás.", price: 3000, image: image8, category: "Accesorios"},
          {id: 9, title: "Piluso Troles", description: "Piluso negro con el logo en el frente y el Troles detrás.", price: 3000, image: image9, category: "Accesorios"}]} />} />
        <Route exact path="/category/:category" element={<ItemListContainer products={[{id: 1, title: "Buzo Troles 1", description: "Buzo negro con el logo en el centro y el Troles en la capucha.", price: 9000, image: image1, category: "Buzos"},
          {id: 2, title: "Buzo Troles 2", description: "Buzo negro con el logo en el centro y el Troles en el bolsillo.", price: 9000, image: image2, category: "Buzos"},
          {id: 3, title: "Buzo Troles 3", description: "Buzo negro con el Troles en el frente a la izquierda y el logo en la espalda.", price: 9000, image: image3, category: "Buzos"},
          {id: 4, title: "Remera Troles 1", description: "Remera negra con el Troles a la izquierda y el logo en la espalda.", price: 5000, image: image4, category: "Remeras"},
          {id: 5, title: "Remera Troles 2", description: "Remera negra con el logo en el centro y el Troles en la nuca.", price: 5000, image: image5, category: "Remeras"},
          {id: 6, title: "Remera Troles 3", description: "Remera negra con el logo a la izquiera y el Troles en la nuca.", price: 5000, image: image6, category: "Remeras"},
          {id: 7, title: "Gorrito Troles", description: "Gorrito negro de lana con el logo en frente y el Troles detrás.", price: 3000, image: image7, category: "Accesorios"},
          {id: 8, title: "Gorra Troles", description: "Gorra negra con el logo en el frente y el Troles detrás.", price: 3000, image: image8, category: "Accesorios"},
          {id: 9, title: "Piluso Troles", description: "Piluso negro con el logo en el frente y el Troles detrás.", price: 3000, image: image9, category: "Accesorios"}]} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer 
          products={[{id: 1, title: "Buzo Troles 1", description: "Buzo negro con el logo en el centro y el Troles en la capucha.", price: 9000, image: image1, category: "Buzos"},
          {id: 2, title: "Buzo Troles 2", description: "Buzo negro con el logo en el centro y el Troles en el bolsillo.", price: 9000, image: image2, category: "Buzos"},
          {id: 3, title: "Buzo Troles 3", description: "Buzo negro con el Troles en el frente a la izquierda y el logo en la espalda.", price: 9000, image: image3, category: "Buzos"},
          {id: 4, title: "Remera Troles 1", description: "Remera negra con el Troles a la izquierda y el logo en la espalda.", price: 5000, image: image4, category: "Remeras"},
          {id: 5, title: "Remera Troles 2", description: "Remera negra con el logo en el centro y el Troles en la nuca.", price: 5000, image: image5, category: "Remeras"},
          {id: 6, title: "Remera Troles 3", description: "Remera negra con el logo a la izquiera y el Troles en la nuca.", price: 5000, image: image6, category: "Remeras"},
          {id: 7, title: "Gorrito Troles", description: "Gorrito negro de lana con el logo en frente y el Troles detrás.", price: 3000, image: image7, category: "Accesorios"},
          {id: 8, title: "Gorra Troles", description: "Gorra negra con el logo en el frente y el Troles detrás.", price: 3000, image: image8, category: "Accesorios"},
          {id: 9, title: "Piluso Troles", description: "Piluso negro con el logo en el frente y el Troles detrás.", price: 3000, image: image9, category: "Accesorios"}]}/>} />
        <Route exact path="/cart" element={<CartWidget />} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App