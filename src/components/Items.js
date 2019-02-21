import React, { useState, useEffect } from 'react';
import { fetchUserContent } from '../utils';

const Items = ({ token, username }) => {
  // state
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});

  // functions
  const getContent = async () => {
    const items = await fetchUserContent(token, username);
    setItems(items);
    setLoading(false);
  };

  // lifecycle
  useEffect(() => {
    getContent();
  }, []);

  // render
  if (loading) {
    return <div>Fetching your content...</div>;
  }

  console.log(items);
  return <div>List user items here</div>;
};

export default Items;
