export interface OverallData {
  cases: number;
  recovered: number;
  deaths: number;
  updated: string;
}

interface HistoricalCountry {
  country: string;
  timeline: {
    [key in 'cases' | 'recovered' | 'deaths']: {
      [key: string]: number;
    };
  };
}

export type HistoricalData = HistoricalCountry[];

export interface CovidDataDaily {
  date: string;
  infected: number;
  deceased: number;
  recovered: number;
}

export type CovidData = CovidDataDaily[];
