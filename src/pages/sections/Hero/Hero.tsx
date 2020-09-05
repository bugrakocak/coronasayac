import React from 'react';

import useApp from '../../../hooks/useApp';

import Stats from '../Stats/Stats';
import Loader from '../../../components/Loader/Loader';

import './hero.scss';
import formatDateKey from '../../../utils/formatDateKey';

const Hero = () => {
  const { covidData, todaysData, loading } = useApp();

  if (loading) {
    return <Loader />;
  }

  if (covidData.length === 0) {
    return (
      <div className="u-text-align-center u-padding-ends-2xlarge u-color-white">
        Covid datası bulunamadı.
      </div>
    );
  }

  const { deceased: deaths, infected: cases, recovered, date } = todaysData;

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title u-margin-ends-0">Corona Virüs Türkiye Güncel İstatistikleri</h1>
        <p className="hero__description">Son veri tarihi: {formatDateKey(date, true)}</p>
        <Stats
          className="u-margin-top-xlarge"
          confirmed={cases}
          deaths={deaths}
          recovered={recovered}
        />
      </div>
    </div>
  );
};

export default Hero;
