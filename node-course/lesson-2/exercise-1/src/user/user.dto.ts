import { AddressDTO } from "./address.dto";

export class UserDTO {
    id: Number;
    name: String;
    email: String;
    phone: String;
    address: AddressDTO;
}