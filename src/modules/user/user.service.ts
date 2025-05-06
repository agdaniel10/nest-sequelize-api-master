import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './model/user.model';
import { User } from './interface/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

    async addUser(data: CreateUserDTO): Promise<User>{
        const newUser = new this.userModel(data);
        await newUser.save();
        return newUser;
    }

     findAll(): Promise<User[] | null> {
        return  this.userModel.findAll();
      }
    
      findOne(id: number): Promise<User | null> {
        return this.userModel.findByPk(id);
      }
    
      async remove(id: number): Promise<void> {
        const deletedUser = this.userModel.findByPk(id);
        (await deletedUser).destroy();

      }
}
