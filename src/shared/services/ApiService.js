// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const ApiService = ({
  requestName,
  ...config
} = {}) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios.create({

    baseURL: 'https://646bbdfa7d3c1cae4ce43d5f.mockapi.io/',
    headers,
    ...config,
  });
};
