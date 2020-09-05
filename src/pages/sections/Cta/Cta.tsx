import React from 'react';

import TwitterButton from '../../../components/buttons/TwitterButton/TwitterButton';

import Loader from '../../../components/Loader/Loader';

import './cta.scss';
import useApp from '../../../hooks/useApp';

const Cta = () => {
  const { covidData, todaysData, loading } = useApp();

  if (loading) {
    return <Loader />;
  }

  if (!covidData.length) {
    return (
      <div className="u-text-align-center u-padding-ends-2xlarge u-color-white">
        Covid datası bulunamadı.
      </div>
    );
  }

  const DAY_COUNT_TO_COMPARE = 7;

  const { infected: lastInfected } = todaysData;
  const lastWeekInfected = covidData[covidData.length - DAY_COUNT_TO_COMPARE].infected;
  const diff = lastInfected - lastWeekInfected;

  const tweetText = `Şu anda Türkiye'de ${lastInfected.toLocaleString(
    'tr-TR',
  )} Corona Virüs vakası var ve bu sayı geçen haftadan bu yana ${diff.toLocaleString(
    'tr-TR',
  )} kişi arttı. Lütfen önlem al! %23vaka${lastInfected} %23HayatEveSığar %23evdekal`;

  return (
    <div className="cta">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__multiply">
            Geçen haftadan bu yana <br className="u-display-none@md-down" /> vaka sayısı
            <span className="cta__multiply-number">&nbsp;{diff.toLocaleString('tr-TR')}&nbsp;</span>
            kişi arttı!
          </div>
          <TwitterButton className="cta__button" text={tweetText} />
        </div>
      </div>
    </div>
  );
};

export default Cta;
