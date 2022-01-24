import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  
  use(req: any, res: any, next: () => void) {
    console.log(`Current request time is: ${new Date().toString()}`);
    next();
  }

}
