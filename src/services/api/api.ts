import { CovidData } from './types';

const END_POINT = 'https://api.apify.com/v2/datasets/LYeOfHQwsv7FsfdGV/items?format=json&clean=1';

const covidData = async (): Promise<CovidData> => {
  try {
    const response = await fetch(END_POINT);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default { covidData };
