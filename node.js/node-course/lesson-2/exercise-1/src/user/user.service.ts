import { Injectable } from '@nestjs/common';
import { AddressDTO } from './address.dto';
import { UserDTO } from './user.dto';
import axios from 'axios';

const jsonfile = require('jsonfile');

@Injectable()
export class UserService {
    
    async getAllUsers(): Promise<UserDTO[]> {
        
        let userDataPromise = this.getUserData();
        
        let userToPhoneAndAddressMapping: Map<String, any> = await this.getPhoneAndAddressData();

        let userData = await userDataPromise;

        let result = userData.map(user => {
            let userDTO = new UserDTO();
            userDTO.id = user.id;
            userDTO.name = user.name;
            userDTO.email = user.email;
            const phoneAndAddressData = userToPhoneAndAddressMapping[user.id];
            userDTO.phone = phoneAndAddressData ? phoneAndAddressData.phone : "No Phone";
            userDTO.address = new AddressDTO();
            userDTO.address.city = phoneAndAddressData ? userToPhoneAndAddressMapping[user.id].address.city : "No City";
            userDTO.address.country = phoneAndAddressData ? userToPhoneAndAddressMapping[user.id].address.country : "No Country";
            return userDTO;
        });

        return result; // Implicit `Promise`
    }

    private async getPhoneAndAddressData() {
        let phoneAndAddressData: any[] = await new Promise((resolve, reject) => {
            jsonfile.readFile(__dirname + "/Data/users.json", function (error, data) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data.users);
                }
            });
        });

        let userToPhoneAndAddressMapping: Map<String, any> = phoneAndAddressData.reduce((map, user) => (map[user.id] = user, map), {});

        console.log(userToPhoneAndAddressMapping);
        return userToPhoneAndAddressMapping;
    }

    private async getUserData() : Promise<any[]> {
        const userData = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
        console.log(userData);
        return userData;
    }
}