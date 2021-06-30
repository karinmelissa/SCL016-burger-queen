import './App.css';
import Home from './views/Home.js';
import OrderMenu from './views/OrderMenu.js';
import KitchenView from './views/KitchenView.js';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/order">
            <OrderMenu />
          </Route>
          <Route path="/pending">
            <KitchenView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
