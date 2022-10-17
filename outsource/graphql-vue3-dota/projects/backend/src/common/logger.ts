import { Service } from 'typedi';

@Service()
export class Logger {
  log(message: string) {
    // eslint-disable-next-line no-console
    console.log(message);
  }

  error(message: string) {
    // eslint-disable-next-line no-console
    console.error(message);
  }
}
