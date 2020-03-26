import React, { useState } from 'react';
import { Loading } from './loading.js';

export const LoadingContext = React.createContext();

// THIS is a HOC
export const withLoading = Content => () => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Content />
    </LoadingContext.Provider>
  );
};
