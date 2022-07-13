import axios from "axios";

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
  responseType: 'json'
});

const catchHandler = (error: any) => {
  throw error;
};

/** Make a fetch GET request and throw if the call fails. */
export const get = async <T>(url: string) => {
  const response = await api
    .get<T>(url, {
      // Resolve if the status code is valid, otherwise raise an error.
      validateStatus: (status) => status >= 200 && status < 300,
    })
    .catch(catchHandler);

  return response.data;
};
