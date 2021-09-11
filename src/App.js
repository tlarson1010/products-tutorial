import logo from './logo.svg';
import './App.css';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <h1>
        Learn React
        <Products/>
        <Products/>
        <Products/>
      </h1>
    </div>
  );
}

export default App;
