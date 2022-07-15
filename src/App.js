
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Fragment>
          <Navigation/>
          <Header/>
          <Home />
     </Fragment>
     

    </div>
  );
}

export default App;
