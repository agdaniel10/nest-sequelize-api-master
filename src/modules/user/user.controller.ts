import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags("users")
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async addUser(@Body() body: CreateUserDTO){
        const newUser = await this.userService.addUser(body);
        return {
            success: true,
            messagee: "user added successfully",
            data: newUser
        }
    }

    @Get()
    @ApiProperty()
    async getAllUsers(){
        const allUsers = await this.userService.findAll();
        return {
            success: true,
            message: "all users",
            data: allUsers,
        }
    }

    @Get(":id")
    @ApiParam({name: "id"})
    async getUser(@Param("id")id: number){
        const result = await this.userService.findOne(id);
        return {
            success: true,
            message: "user found",
            data: result
        }
    }

    @Delete(":id")
    @ApiParam({name: "id"})
    async deleteUser(@Param("id")id: number){
        const deletedUser = await this.userService.remove(id);
        return {
            success: true,
            message: "user successfully deleted",
            data: deletedUser,
        }
    }
}
