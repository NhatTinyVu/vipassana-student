import axios from 'axios';

let instance = null;

export const init = () => {
  instance = axios.create({
    baseURL: '',
    timeout: 20000,
  });
};

export const getInstance = () => {
  if (!instance) init();
  return instance;
};
