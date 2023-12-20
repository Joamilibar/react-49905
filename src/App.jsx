//COMPONENTES
import { MainRouter } from './router/MainRouter';



// IMPORTACION ESTILOS DE BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MainRouter />
      
    </div>
  );
}

console.log(App)
export default App
