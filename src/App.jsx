import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Store'

// components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
    <div >
      <Provider store={store}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movie/:id' element={<MovieDetail />}/>
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
      </Provider>
    </div>
  )
}

export default App
