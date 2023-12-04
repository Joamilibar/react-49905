
//COMPONENTES
import NavBarComponent from './components/NavBarComponent';
import ItemListContainer from './components/ItemListContainer';



// IMPORTACION ESTILOS DE BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss'




function App() {

  return (
    <div style={{width:'100vw', height:'100vh'}}>
      <div>
      <NavBarComponent />
      </div>
      <div>
      <ItemListContainer greeting='Bienvenidos al e-commerce de' empresa='Beds & Dreams'/>
      </div>

    </div>
  );
  }

export default App
