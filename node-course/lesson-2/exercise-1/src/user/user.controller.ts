import { Controller, Get } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private service: UserService) {}

    @Get() 
    async getAllUsers() : Promise <UserDTO[]> {
        return this.service.getAllUsers();
    }
}

