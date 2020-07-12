import React, { ReactNode, FC } from 'react';

import { AppContextProvider } from './context/app';
import useData from './hooks/useData';

interface Props {
  children: ReactNode;
}

const App: FC<Props> = ({ children }) => {
  const { covidData, loading } = useData();

  return <AppContextProvider value={{ covidData, loading }}>{children}</AppContextProvider>;
};

export default App;
