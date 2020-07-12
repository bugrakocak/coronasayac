import React, { FC } from 'react';
import GhostButton from '../../../components/buttons/GhostButton/GhostButton';
import { ChartType } from './Chart/Chart';

interface Props {
  active: ChartType;
  setActive: (type: ChartType) => void;
}

const ChartButtons: FC<Props> = ({ active, setActive }) => (
  <div className="u-margin-top-medium u-display-flex u-justify-content-center">
    <GhostButton
      isActive={active === 'confirmed'}
      onClick={() => {
        setActive('confirmed');
      }}
      theme="primary"
      className="u-margin-right"
      text="Vaka"
    />
    <GhostButton
      isActive={active === 'death'}
      onClick={() => {
        setActive('death');
      }}
      theme="secondary"
      className="u-margin-right"
      text="Kayıp"
    />
    <GhostButton
      isActive={active === 'recovered'}
      onClick={() => {
        setActive('recovered');
      }}
      theme="tertiary"
      text="İyileşen"
    />
  </div>
);

export default ChartButtons;
