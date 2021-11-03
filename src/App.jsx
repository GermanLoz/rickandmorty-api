import './App.css';
import './responsive.css' ;
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav.jsx'
import Inicio from './pages/inicio.jsx'
import Favorito from './pages/favorito.jsx'
import Search from './pages/search.jsx'

function App() {
  return (
   <div>
      <Router>
          <Nav/>
            <Switch>
                <Route exact path ="/" component={Inicio}></Route>
                <Route path ="/favoritos" component={Favorito}></Route>
                <Route path ="/search" component={Search}></Route>
            </Switch>
      </Router>
    </div>
  );
}
export default App;

