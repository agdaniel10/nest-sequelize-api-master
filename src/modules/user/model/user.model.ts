import { Column, Model, Table } from "sequelize-typescript";
import { User } from "../interface/user.interface";


@Table
export class UserModel extends Model<User>{

    @Column({type: "integer",allowNull: false,autoIncrement: true,primaryKey: true})
    id: number;

    @Column
    first_name: string;


    @Column
    last_name: string;

    @Column
    email: string;

    @Column
    is_active: boolean;

    @Column({defaultValue: Date.now(),})
    createdAt?: Date;

    @Column({defaultValue: Date.now()})
    updatedAt?: Date;

}