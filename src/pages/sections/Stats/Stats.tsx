import React, { FC } from 'react';
import cx from 'classnames';

import Stat from '../../../components/Stat/Stat';

import './stats.scss';

interface Props {
  className?: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

const POPULATION_OF_TURKEY = 84339067;

const Stats: FC<Props> = ({ confirmed, deaths, recovered, className }) => {
  const percentageOfConfirmed = ((confirmed / POPULATION_OF_TURKEY) * 100).toFixed(2);
  const percentageOfDeath = ((deaths / confirmed) * 100).toFixed(1);
  const percentageOfRecovery = ((recovered / confirmed) * 100).toFixed(1);

  return (
    <div className={cx('stats', className)}>
      <div className="stats__item">
        <Stat
          className="stats__stat"
          theme="total"
          count={confirmed.toLocaleString('tr-TR')}
          text="Kişiye Tanı Kondu"
        />
        <div className="stats__info">
          Bu sayının toplam Türkiye nüfusuna oranı
          <span className="stats__info-high">
            <strong> %{percentageOfConfirmed}</strong>
          </span>
        </div>
      </div>
      <div className="stats__item">
        <Stat
          className="stats__stat"
          theme="death"
          count={deaths.toLocaleString('tr-TR')}
          text="Kişi Vefat Etti"
        />
        <div className="stats__info">
          Virüse yakalanıp hayatını kaybedenlerin oranı
          <span className="stats__info-high">
            <strong> %{percentageOfDeath}</strong>
          </span>
        </div>
      </div>
      <div className="stats__item">
        <Stat
          className="stats__stat"
          theme="recovered"
          count={recovered.toLocaleString('tr-TR')}
          text="Kişi İyileşti"
        />
        <div className="stats__info">
          Virüse yakalanıp iyileşenlerin oranı
          <span className="stats__info-high">
            <strong> %{percentageOfRecovery}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
