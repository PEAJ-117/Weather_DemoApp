import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherMenu from './components/WeatherMenu';

function App() {
  return (
    <div className="App">
      {/* Ingresando componentes */}
      <NavBar />
      <WeatherMenu/>
    </div>
  );
}

export default App;
