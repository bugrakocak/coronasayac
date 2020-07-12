import React, { FC, useState } from 'react';
import cx from 'classnames';

import ChartButtons from './ChartButtons';
import Chart, { ChartType } from './Chart/Chart';

import './charts.scss';

interface Props {
  className?: string;
}

const Charts: FC<Props> = ({ className }) => {
  const [activeChart, setActiveChart] = useState<ChartType>('confirmed');

  return (
    <div className={cx('charts', className)} id="charts">
      <div className="container u-text-align-center">
        <h2 className="u-color-white">Son 15 Günlük Veri Grafiği</h2>
        <p className="u-color-secondary">
          Grafikte son 15 gündeki vaka, kayıp ve iyileşen verileri gösterilmektedir.
        </p>
        <ChartButtons active={activeChart} setActive={setActiveChart} />
        <div className="charts__chart-wrapper">
          <div className="charts__chart">
            <Chart type={activeChart} width={2} height={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
