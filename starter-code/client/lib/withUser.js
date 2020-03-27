import React, { useState, useEffect } from 'react';
import { Loading } from './loading.js';
import { UserContext, getUserLogged } from './auth.api.js';
import { withRouter } from 'react-router';

// THIS is a HOC
export const withUser = Content => () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('loading user...');
    getUserLogged()
      .then(user => {
        console.log(`Welcome ${user.username}`);
        setUser(user);
      })
      .catch(error => {
        console.error('No user logged in');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {loading && <Loading />}
      <Content />
    </UserContext.Provider>
  );
};
