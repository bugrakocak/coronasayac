import { useContext } from 'react';
import { AppContext } from '../context/app';

const useApp = () => {
  const { covidData: data, loading } = useContext(AppContext);

  const todaysData = data[data.length - 1];

  return { covidData: data, todaysData, loading };
};

export default useApp;
