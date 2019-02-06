import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import Items from './Items';

const App = () => {
  // state
  const [authed, setAuthed] = useState(false);

  // lifecycle
  useEffect(() => {
    console.log('check url');
  }, []);

  // render
  if (!authed) {
    return <SignIn />;
  }

  return <Items />;
};

export default App;
