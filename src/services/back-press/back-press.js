import { isFunction } from 'lodash';

let isDisabled = false;
let enhanceBackHandler = null;

export const get = () => ({
  disable: isDisabled,
  handler: enhanceBackHandler,
});

export const setDisable = disable => {
  isDisabled = disable;
};

export const enable = () => {
  isDisabled = false;
};

export const disable = () => {
  isDisabled = true;
};

export const handler = () => {
  if (isDisabled) {
    return true;
  }

  if (isFunction(enhanceBackHandler)) {
    return enhanceBackHandler();
  }

  return false;
};

export const setHandler = fn => {
  enhanceBackHandler = fn;
};

export const resetDisable = () => {
  isDisabled = false;
};

export const resetHandler = () => {
  enhanceBackHandler = false;
};

export const reset = () => {
  resetDisable();
  resetHandler();
};
