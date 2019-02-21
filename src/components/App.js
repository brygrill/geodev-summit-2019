import React, { useState, useEffect } from 'react';
import qs from 'qs';

import SignIn from './SignIn';
import Items from './Items';

const App = () => {
  // state
  const [authed, setAuthed] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // functions
  const removeHash = () => {
    window.history.pushState('', document.title, window.location.pathname);
  };

  const extractToken = () => {
    // drop # from string
    const hash = qs.parse(window.location.hash.slice(1));

    // extract token and username
    if (hash.access_token && hash.username) {
      setAuthed(true);
      setToken(hash.access_token);
      setUser(hash.username);
    }
    // clear hash
    if (hash) removeHash();
  };

  // lifecycle
  useEffect(() => {
    extractToken();
  }, []);

  // render
  if (!authed) {
    return <SignIn />;
  }

  return <Items token={token} username={user} />;
};

export default App;
