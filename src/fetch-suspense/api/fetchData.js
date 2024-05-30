import axios from 'axios';
import wrapPromise from './wrapPromise';

// either wrap call with suspender or useSWR

function fetchData(url) {
  const promise = axios.get(url).then((res) => {
    
    if (res.status === 404) {
      throw new Error('Resource not found (404)');
    }
    if (res.status === 500) {
      throw new Error('Internal Server Error (500)');
    }
    return res.data;

  }).catch((err) => {
    const errorMessage = err.response ? err.response.statusText : err.message;
    throw new Error(errorMessage);
  });

  return wrapPromise(promise);
}

export default fetchData;
