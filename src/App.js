import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Rating from './Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


function App() {

  const isValid = true;

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
      <Rating rating='1'/>
      <Rating rating='2'/>
      <Rating rating='3'/>
      <Rating rating='4'/>
      <Rating rating='5'/>
      <Button variant="primary" disabled={!isValid}>Default</Button>
    </div>
  );
}

export default App;
