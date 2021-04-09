import './App.css';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import AmountSelect from './components/AmountSelect';
import AmountEnter from './components/AmountEnter';
import Confirmation from './components/Confirmation';
import PasTrouve from './components/PasTrouve';
import Admin from './components/Admin';

function App() {
    return (
        <HashRouter>
            <main>
                <Switch>
                    <Redirect from="/" to="/participer" exact />
                    <Route path="/participer" component={Home} exact />
                    <Route path="/choisir-montant" component={AmountSelect} exact />
                    <Route path="/entrer-montant" component={AmountEnter} exact />
                    <Route path="/confirmation" component={Confirmation} exact />
                    <Route path="/admin" component={Admin} exact />
                    <Route component={PasTrouve} exact />
                </Switch>
            </main>
        </HashRouter>
  );
}

export default App;
