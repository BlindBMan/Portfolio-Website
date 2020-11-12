import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Introduction from './components/home-page/introduction/Introduction'
import Services from "./components/home-page/services/Services";
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
