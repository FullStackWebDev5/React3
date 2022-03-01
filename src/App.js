import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Products from './components/Products/Products'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <h1 className="display-1">Welcome to our site</h1>
      <p className="lead">Feel free to explore ...</p>
      <Products />
    </div>
  );
}

export default App;
