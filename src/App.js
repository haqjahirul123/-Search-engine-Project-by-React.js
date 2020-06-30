// import React, { Component} from 'react';
import React, {useState} from 'react';
import Navbar from './components/Navbar'
//import './App.css';
//import {BrowserRouter ,Route} from 'react-router-dom'
//import home from './components/Home'
//import favouriteItem from './components/favouriteItem'
import Search from './components/search'

function App () {
  const [currentTab, setCurrentTab] = useState('search')
    return (
        <div className='App'>
           <div className="view" ></div>
          <header className='App-header'>
            <Navbar tabCallback={setCurrentTab} />
            <h1 className="text-center">{currentTab}</h1>
          </header>
          <main>
            <div className='content'>
              <Search tabSelected={currentTab} />
            </div>
          </main>
        </div>
      )
      // <BrowserRouter>
      // <div className="App">
       
      //   <Navbar/>
  
      //   <Route exact path='/' component={home}/>
      //   <Route path='/favouriteItem' component={favouriteItem}/> 
      //   <Route path='/search' component={search}/>

      
      // </div>
      
      // </BrowserRouter>
      
    
  }

export default App;
