import Container, { Token } from 'typedi';
import type { AppConfig } from './types';

export const appConfig = new Token<AppConfig>('APP_CONFIG');

Container.set(appConfig, {
  env: import.meta.env,
  DOTA2_API_BASE_URL: 'https://www.dota2.com/webapi/',
});
