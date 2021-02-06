import { addDays } from 'date-fns';
import { HistoricalData, OverallData } from './types';

const BASE_URL = 'https://corona.lmao.ninja';
const API_VERSION = 'v2';
const COUNTRY_CODE = 'tr';

const END_POINTS = {
  historical: `${BASE_URL}/${API_VERSION}/historical`,
  overall: `${BASE_URL}/${API_VERSION}/countries/${COUNTRY_CODE}`,
};

const COUNTRY_NAME = 'Turkey';

const parseAndGetNextDay = (_date: string) => {
  const [month, date, year] = _date.split('/').map(d => Number(d));
  const newDate = new Date();
  newDate.setFullYear(Number(`20${year}`));
  newDate.setMonth(month);
  newDate.setDate(date);
  return addDays(newDate, 1);
};

const dateToDataKey = (_date: Date) => {
  const date = _date.getDate();
  const month = _date.getMonth();
  const year = _date.getFullYear();

  return `${month}/${date}/${year.toString().substr(2, 2)}`;
};

const flatData = (data: [HistoricalData, OverallData]) => {
  const [historical, overall] = data;
  const {
    cases: overallTotalCases,
    deaths: overallTotalDeaths,
    recovered: overallTotalRecovered,
  } = overall;

  const countryHistoricalData = historical.find(d => d.country === COUNTRY_NAME)!;
  const { cases, deaths, recovered } = countryHistoricalData.timeline;
  const timelineDays = Object.keys(cases);
  const timelineLastDay = timelineDays[timelineDays.length - 1];
  const timelineLastDayCases = cases[timelineLastDay];

  const flatten = timelineDays.map(d => {
    return {
      date: d,
      infected: cases[d],
      deceased: deaths[d],
      recovered: recovered[d],
    };
  });

  //
  // Historical data API attach today's data with a delay
  // So we merge today's data to historical data if it doesn't exist
  //
  if (timelineLastDayCases < overallTotalCases) {
    const nextDay = dateToDataKey(parseAndGetNextDay(timelineLastDay));
    return [
      ...flatten,
      {
        date: nextDay,
        infected: overallTotalCases,
        deceased: overallTotalDeaths,
        recovered: overallTotalRecovered,
      },
    ];
  }

  return flatten;
};

const covidData = async () => {
  try {
    const [historical, overall] = await Promise.all<HistoricalData, OverallData>([
      fetch(END_POINTS.historical).then(response => response.json()),
      fetch(END_POINTS.overall).then(response => response.json()),
    ]);
    return flatData([historical, overall]);
  } catch (error) {
    throw new Error(error);
  }
};

export default { covidData };
