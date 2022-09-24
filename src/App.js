import { useState, useEffect } from 'react';

import Header from './components/Header';
import Main from './components/Main';

import Index from './pages/Index';
import Show from './pages/Show';

function App() {
return(
  <div className='app'>
    <Header />
    <Main />
  </div>
)  
}

export default App;