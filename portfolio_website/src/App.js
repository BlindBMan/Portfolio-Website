import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'
import Services from "./components/services/Services";
import Footer from './components/footer/Footer'

function App() {
  return (
      <div className="App">
        <Header />
        <Introduction />
        <Services />
        <Footer />
      </div>
  )
}

export default App;
