export interface CovidDataDaily {
  tested: number;
  infected: number;
  deceased: number;
  recovered: number;
  sourceUrl: string;
  lastUpdatedAtSource: string;
  lastUpdatedAtApify: string;
  readme: string;
}

export type CovidData = CovidDataDaily[];
