import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestCounterMiddleware implements NestMiddleware {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  use(request: any, response: any, next: () => void) {
    console.log(`req = ${request}`);
    console.log(`res = ${response}`);

    this.counter++;
    console.log(`Got ${this.counter} request so far`);
    next();
  }
}
