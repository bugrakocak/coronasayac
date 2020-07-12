import { useContext } from 'react';
import { isSameDay } from 'date-fns';
import { AppContext } from '../context/app';
import { CovidData } from '../services/api/types';

// Sometimes data comes with an duplicated days so we reduce them
const removeDuplicates = (data: CovidData) =>
  data.reduce((acc, curr) => {
    if (!acc.length) return [curr];

    const { lastUpdatedAtApify: currDate } = curr;
    const lastDate = acc[acc.length - 1].lastUpdatedAtApify;

    if (isSameDay(new Date(lastDate), new Date(currDate))) {
      acc.splice(acc.length - 1, 1, curr);
      return acc;
    }
    return [...acc, curr];
  }, [] as CovidData);

const useApp = () => {
  const { covidData: data, loading } = useContext(AppContext);

  const lastDay = data[data.length - 1];
  const filteredData = removeDuplicates(data);

  return { covidData: filteredData, lastDay, loading };
};

export default useApp;
