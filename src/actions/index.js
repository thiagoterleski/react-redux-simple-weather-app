import axios from 'axios';

const API_KEY = 'f106011efd4da51e7d8268d042e021e8';
const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WHEATER = 'FETCH_WHEATER';

export function fetchWheater(city) {
  const url = `${API_ENDPOINT}&q=${city}&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WHEATER,
    payload: request
  }
}
