import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Logs from './components/Logs/Logs';
import AddLogs from './components/Logs/AddLogs';
import AddTechs from './components/Techs/AddTechs';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Logs} />
          <Route path='/alllogs' exact component={Logs} />
          <Route path='/logs' exact component={AddLogs} />
          <Route path='/techs' exact component={AddTechs} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
