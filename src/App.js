import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
// import Products from './components/Products/Products'
import Products2 from './components/Products2/Products2'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <h1 className="display-1">Welcome to our site</h1>
      <p className="lead">Feel free to explore ...</p>
      {/* <Products /> */}
      <Products2 />
    </div>
  );
}

export default App;
