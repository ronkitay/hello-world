import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, throwError, of, pipe } from 'rxjs';

import { Request , Response} from 'express';

@Injectable()
export class PriceVerifierInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    let req = context.switchToHttp().getRequest() as Request;

    if(req.method == 'POST') {
      console.log(req.body);
      let dto = req.body;
      console.log(dto);
      console.log(dto.price);
      if ( dto.price < 50.0) {
        dto.price = 50;
      }
    }

    return next.handle();
  }
}
