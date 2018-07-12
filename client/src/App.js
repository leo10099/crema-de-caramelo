import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import theme from './theme'
import Home from './components/presentational/Home'
import Gallery from './components/presentational/Gallery'
import Contact from './components/presentational/Contact'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/galeria' exact component={Gallery} />
            <Route path='/contacto' exact component={Contact} />
          </React.Fragment>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
