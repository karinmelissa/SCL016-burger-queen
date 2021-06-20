import './App.css';
import MyNewComponent from './components/MyNewComponent.js';
import Home from './components/Home.js';
import OrderMenu from './views/OrderMenu.js';
import { Router } from '@reach/router';
import Login from './views/Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/"/>
        <Home path="/home"/>
        <OrderMenu path="/menu"/>
      </Router>
    </div>
    
  );
}

export default App;
