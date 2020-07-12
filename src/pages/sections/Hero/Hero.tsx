import React from 'react';
import { format } from 'date-fns';
import tr from 'date-fns/locale/tr';

import useApp from '../../../hooks/useApp';

import Stats from '../Stats/Stats';
import Loader from '../../../components/Loader/Loader';

import './hero.scss';

const Hero = () => {
  const { covidData, lastDay, loading } = useApp();

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

  const { deceased: deaths, infected: cases, recovered, lastUpdatedAtApify } = lastDay;

  const lastUpdate = format(new Date(lastUpdatedAtApify), 'dd MMMM yyyy HH:mm', {
    locale: tr,
  });

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title u-margin-ends-0">Corona Virüs Türkiye Güncel İstatistikleri</h1>
        <p className="hero__description">Son güncelleme: {lastUpdate} (İstanbul)</p>
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
