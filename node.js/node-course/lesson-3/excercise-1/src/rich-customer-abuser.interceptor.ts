import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

import { Request , Response} from 'express';
import { ProductDTO } from './product/product.dto';

@Injectable()
export class RichCustomerAbuserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(tap(body => {
      let products: ProductDTO[] = body;
      products.forEach(product => {
        return product.price = product.price * 1.2;
      })
      return products;
    }));
  }
}
