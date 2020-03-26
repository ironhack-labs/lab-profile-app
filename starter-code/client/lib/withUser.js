import React, { useState, useEffect } from 'react';
import { Loading } from './loading.js';
import { UserContext, getUserLogged } from './auth.api.js';

// THIS is a HOC
export const withLoading = Content => () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserLogged()
      .then(user => {
        setUser(user);
      })
      .catch(error => {
        console.error('No user logged in');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {loading && <Loading />}
      <Content />
    </UserContext.Provider>
  );
};
