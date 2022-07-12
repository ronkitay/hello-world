import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {


    products: ProductDTO[] = []

    constructor() {
        let p1 = new ProductDTO();
        p1.serialNumber = 'AAAAA';
        p1.name = 'Some product';
        p1.price = 127.35;
        this.products.push(p1);
    }
    
    getAllProducts(): ProductDTO[] {
        return this.products;
    }

    addProduct(newProduct: ProductDTO) {
        this.products.push(newProduct);
    }

    updateProduct(productId: string, updatedProduct: ProductDTO) {
        let index = this.products.findIndex(product => product.serialNumber == productId);
        if (index < 0) {
            this.products.push(updatedProduct);
        }
        else {
            this.products[index] = updatedProduct;
        }
    }

    
}
