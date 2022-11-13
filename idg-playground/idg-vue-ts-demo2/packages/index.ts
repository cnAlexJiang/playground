import { App, ChannelOptions, CiEnv, Service } from '@idg/idg';
import packages from './packages';
import example from './example';
import services from './services';
import config from './config.json';

const { appid, proxyURL, appType, indexRouteName, serviceAppid } = config;


let exports

if (appType === 'app') {
  class IdgApp extends App {
    constructor(ciEnv?: CiEnv) {
      const children: Service[] = services();
      super({
        appid,
        serviceAppid,
        children,
        packages: [
          ...packages,
          example,
        ],
        ciEnv,
      });
    }

    public getProxyURL() {
      return this.getServerHost() + proxyURL
    }

    public redirectIndex(cb: () => void) {
      this.router.push({
        name: indexRouteName
      }, cb);
    }
  }
  exports = IdgApp
}

if (appType === 'service') {
  class IdgService extends Service {
    constructor(channelOptions: ChannelOptions) {
      super({
        appid,
        serviceAppid,
        packages,
        channelOptions,
        children: services(),
      });
      window.Gui = this;
    }

    redirectIndex(onComplete: () => void) {
      this.root.router.push({
        name: indexRouteName
      }, onComplete);
    }
  }
  exports = IdgService
}

if (appType === 'packages') {
  exports = packages
}


export default exports;
