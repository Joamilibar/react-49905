//COMPONENTES
import { MainRouter } from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    // En vez de vh y vw es mejor usar las clases que ya trae Bootstrap
    // En este caso container o container-fluid
    // https://getbootstrap.com/docs/5.3/layout/containers/
    <div className="container-fluid">
      <MainRouter />
    </div>
  );
}

// Si vas a hacer un log siempre agrega la ruta desde
// dónde sale el log, es más fácil de trackear
console.log("🚀 ~ file: App.jsx:22 ~ App:", App)

export default App
