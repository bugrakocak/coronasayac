import { useState, useEffect } from 'react';

import api from '../services/api/api';
import { CovidData } from '../services/api/types';

const useData = () => {
  const [covidData, setCovidData] = useState<CovidData>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const data = await api.covidData();
        setCovidData(data);
      } catch (error) {
        throw new Error();
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { covidData, loading };
};

export default useData;