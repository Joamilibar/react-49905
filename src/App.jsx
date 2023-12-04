
//COMPONENTES
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer';



// IMPORTACION ESTILOS DE BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss'




function App() {

  return (
    <div style={{width:'100vw', height:'100vh'}}>      
      <NavBarComponent />
      <ItemListContainer greeting='Bienvenidos al E-Commerce de' empresa='Beds & Dreams'/>
    </div>
  );
  }

export default App
