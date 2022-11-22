import {auth } from './firebase';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [user,setUser ] = useState(null);

  useEffect(() => {
//set up
const unsubscribe = auth.onAuthStateChanged(
  (userObjOrNull) => { setUser(userObjOrNull);
  });
  return () => {
    unsubscribe();
  };
//watch for logged users
//unset on logout
  }, []);

return(
  <div className='app'>
    <Header user={user}/>
    <Main user={user}/>
  </div>
)  
}

export default App;