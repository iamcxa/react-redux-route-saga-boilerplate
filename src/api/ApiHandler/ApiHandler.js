import { ApiConst, ApiRuntime } from '@udea-io/axios-wrapper';
import { get } from 'lodash';

import Config from '~/config';

import { hookDefaultError } from '../ApiResponse';
import * as ApiInterceptors from './ApiInterceptors';

const ApiHandler =
  (
    method = ApiConst.GET,
    config = {},
    options = {
      headers: {
        // 'Accept-Language': Localization.locales.toString(),
      },
    },
  ) =>
  async (url) => {
    // Get current app locale status
    const acceptLanguage = get(config, 'headers["Accept-Language"]');
    if (!acceptLanguage) {
      // acceptLanguage = Localization.locales.toString();
    }

    const jwt = get(config, 'Authorization');
    const ENV = Config.API_ENV;

    // eslint-disable-next-line no-return-await
    return await ApiRuntime(
      url,
      method,
      {
        ...options,
        requestInterceptor: ApiInterceptors.requestInterceptor,
        responseInterceptor: ApiInterceptors.responseInterceptor,
        errorHandler: ApiInterceptors.responseInterceptor,
      },
      {
        baseURL: get(Config, `${ENV}.API_BASE_URL`, Config.API_BASE_URL),
        headers: {
          'Accept-Language': acceptLanguage,
          Authorization: jwt && `Bearer ${jwt}`,
          ...get(config, 'headers', {}),
        },
        ...config,
      },
      process.env.NODE_ENV === 'development',
    );
  };

export default ApiHandler;
