import logo from './logo.svg';
import './App.css';
import Products from './Products';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


function App() {

  const user = {
    firstName: 'Tristyn',
    lastName: 'Larson',
    imageUrl: 'https://picsum.photos/200/300'
  };

  return (
    <div>
      <h1>
        Hello, {formatName(user)}
      </h1>
      <br/>
      <img src={user.imageUrl}></img>
      <Products />
    </div>
  );
}

export default App;
