import { AppConfig, UserSession } from 'blockstack';

export const appConfig = new AppConfig(['store_write']);

export const userSession = new UserSession({ appConfig });
