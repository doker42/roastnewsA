import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import createBrowserHistory from "history/createBrowserHistory"
import FormInputNewsMain from './components/FormInputNewsMain.jsx'
import UnderHeader from './components/UnderHeader'


// const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">                     

        <Header />

        <BrowserRouter>
          <div>
            <UnderHeader />

            <Route>

              <Switch>

                <Route exact path='/' component={ Main } />               
                
                <Route path='/newsform' component={ FormInputNewsMain } /> 

              </Switch>
            </Route>
      
          </div>
        </BrowserRouter>

        <Footer /> 
                  
      </div>
    );
  }
}

export default App;
