import { createContext } from 'react';
import { CovidData } from '../services/api/types';

interface AppContextValues {
  covidData: CovidData;
  loading: boolean;
}

const defaultValue: AppContextValues = {
  covidData: [],
  loading: false,
};

const AppContext = createContext<AppContextValues>(defaultValue);
const AppContextProvider = AppContext.Provider;

export { AppContextProvider, AppContext };
