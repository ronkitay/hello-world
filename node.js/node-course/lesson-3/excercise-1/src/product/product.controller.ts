import { Body, Controller, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { PriceVerifierInterceptor } from '../price-verifier.interceptor';
import { RichCustomerAbuserInterceptor } from '../rich-customer-abuser.interceptor';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private service: ProductService) {}

    @Get()
    @UseInterceptors(new RichCustomerAbuserInterceptor())
    getAllProducts() : ProductDTO[] {
        return this.service.getAllProducts();
    }

    @Put(':id')
    updateProduct(@Param('id') productId: string, @Body() updatedProduct: ProductDTO) : String {
        this.service.updateProduct(productId, updatedProduct);
        return "Updated " + updatedProduct;
    }

    @Post()
    @UseInterceptors(new PriceVerifierInterceptor())
    addProduct(@Body() newProduct: ProductDTO) : String {
        this.service.addProduct(newProduct);
        return "Added " + newProduct.toString();
    }

}
