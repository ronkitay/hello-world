import { Length } from "class-validator";

export class ProductDTO {

    @Length(5,5)
    serialNumber: String;

    name: String;

    price: number;
}