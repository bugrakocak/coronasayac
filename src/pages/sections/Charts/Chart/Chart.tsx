import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';

import Loader from '../../../../components/Loader/Loader';
import useApp from '../../../../hooks/useApp';
import { CovidDataDaily } from '../../../../services/api/types';
import formatDateKey from '../../../../utils/formatDateKey';

export type ChartType = 'confirmed' | 'death' | 'recovered';

interface Props {
  type?: ChartType;
  width?: number;
  height?: number;
}

interface ChartDataType {
  label: string;
  color: string;
  data?: number[];
}

interface ChartTypesType {
  [key: string]: ChartDataType;
}

const chartTypes: ChartTypesType = {
  death: {
    label: 'Kayıp',
    color: '#EA1F40',
  },
  confirmed: {
    label: 'Vaka',
    color: '#FF6B51',
  },
  recovered: {
    label: 'İyileşen',
    color: '#2ad586',
  },
};

const DATES_TO_DISPLAY = 15;

const getLastNElement = <T,>(arr: T[], n: number): T[] => arr.slice(arr.length - n, arr.length);
const sliceData = <T,>(arr: T[]) => getLastNElement(arr, DATES_TO_DISPLAY);

const CaseChart: FC<Props> = ({ width, height, type = 'confirmed' }) => {
  const { covidData, loading } = useApp();

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

  const getFieldByKey = (field: keyof CovidDataDaily): (string | number)[] => {
    return covidData.map(d => d[field]);
  };

  const confirmedData = getFieldByKey('infected');
  const deathData = getFieldByKey('deceased');
  const recoveredData = getFieldByKey('recovered');
  const dates = getFieldByKey('date');

  chartTypes.confirmed.data = sliceData(confirmedData.map(d => Number(d)));
  chartTypes.death.data = sliceData(deathData.map(d => Number(d)));
  chartTypes.recovered.data = sliceData(recoveredData.map(d => Number(d)));

  const formattedDates = dates.map(d => formatDateKey(d.toString()));
  const dataLabels = sliceData(formattedDates);

  const { color, data, label } = chartTypes[type];

  return (
    <Line
      width={width}
      height={height}
      data={{
        labels: dataLabels,
        datasets: [
          {
            label,
            data,
            backgroundColor: 'transparent',
            borderColor: color,
            borderWidth: 4,
            pointBorderWidth: 4,
            pointBorderColor: '#121A23',
            fill: true,
            radius: 6,
            pointBackgroundColor: '#fff',
          },
        ],
      }}
      options={{
        tooltips: {
          intersect: false,
          backgroundColor: '#fff',
          cornerRadius: 2,
          bodyFontColor: color,
          bodyAlign: 'center',
          bodyFontSize: 14,
          bodyFontStyle: 'bold',
          titleFontFamily: 'Inter',
          displayColors: false,
          xPadding: 12,
          yPadding: 8,
          callbacks: {
            title: () => '',
            label: d => `${d.value} ${label}`,
          },
        },
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: '#3F292C',
                borderDash: [0],
                lineWidth: 1,
                drawBorder: true,
                drawTicks: false,
              },
              ticks: {
                fontColor: '#fff',
                fontSize: 14,
                padding: 24,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: '#3F292C',
                borderDash: [0],
                lineWidth: 1,
                drawBorder: true,
                drawTicks: false,
              },
              ticks: {
                fontColor: '#fff',
                fontSize: 14,
                padding: 21,
              },
            },
          ],
        },
      }}
    />
  );
};

export default CaseChart;
