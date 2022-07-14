import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';

import { UserContext, User } from './userContext';
import theme from './theme';

type GetWrapperOptions = {
  history?: MemoryHistory;
  user?: User;
};

type GetWrapper = (options?: GetWrapperOptions) => React.FunctionComponent;

const getWrapper: GetWrapper = (options) => {
  const { history = createMemoryHistory(), user = {} } = options ?? {};

  const Wrapper: React.FunctionComponent = ({ children }) => {
    return (
      <UserContext.Provider value={user}>
        <ThemeProvider theme={theme}>
          <Router history={history}>{children}</Router>
        </ThemeProvider>
      </UserContext.Provider>
    );
  };

  return Wrapper;
};

export default getWrapper;
