import axios from 'axios';
import I18n from 'i18n';
import RNRestart from 'react-native-restart';
import { Toast } from 'ui';
import { get } from 'lodash';
import queryString from 'query-string';
import { APIConstants } from 'src/config/url';
import store from 'src/module/store';
import { APP_RESET } from 'src/module/app/type';
import { ErrorCodes, ErrorMessages } from 'src/config/errorCode';
import { wait } from 'src/utils';

let instance = null;

const handleWhenTokenIsExpired = async () => {
  const { hasLoggedIn } = store.getState().app;
  if (!hasLoggedIn) return;
  Toast.show(I18n.t('messages.expiredSession'), {
    position: Toast.positions.CENTER,
  });
  store.dispatch({ type: APP_RESET });
  await wait(1000);
  RNRestart.Restart();
};

export const init = () => {
  instance = axios.create({
    baseURL: store.getState().app.baseURL || 'https://fb2u-api.pplus.vn/v1',
    timeout: 20000,
  });

  instance.interceptors.request.use(config => {
    const {
      accessToken,
      platform,
      appVersion,
      language,
      latitude,
      longitude,
    } = store.getState().app;
    const { query } = queryString.parseUrl(config.url);

    const locationHeader =
      query.nearest === APIConstants.nearest.YES &&
      typeof latitude === 'number' &&
      typeof longitude === 'number'
        ? `${latitude},${longitude}`
        : null;

    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'X-Env': `${platform}|${appVersion}|${language}`,
        Authorization: accessToken ? `Bearer ${accessToken}` : null,
        'X-Location': locationHeader,
      },
    };
  });

  instance.interceptors.response.use(
    response => {
      if (response.data && response.data.success) {
        return {
          error: null,
          message: null,
          data: response.data.data,
        };
      }

      const errorCode = get(response, 'data.data.code', ErrorCodes.DEFAULT);
      if (errorCode === ErrorCodes.EXPIRED_TOKEN) handleWhenTokenIsExpired();

      return {
        error: errorCode,
        message: I18n.t(
          ErrorMessages[errorCode] || ErrorMessages[ErrorCodes.DEFAULT],
        ),
      };
    },
    error =>
      Promise.resolve({
        error: ErrorCodes.INTERNET,
        message: I18n.t(ErrorMessages[ErrorCodes.INTERNET]),
        data: null,
      }),
  );
};

export const getInstance = () => {
  if (!instance) init();
  return instance;
};
