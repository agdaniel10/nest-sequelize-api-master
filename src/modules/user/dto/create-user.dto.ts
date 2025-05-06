import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString,IsEmail } from "class-validator";


export class CreateUserDTO{
    @ApiProperty() @IsString() @IsNotEmpty({message: "first_name is required"}) first_name:string;
    @ApiProperty() @IsString() @IsNotEmpty({message: "last_name is required"}) last_name:string;
    @ApiProperty() @IsEmail() @IsNotEmpty({message: "email is required"}) email:string;
    @ApiProperty() @IsString() @IsNotEmpty({message: "is_active is required"}) is_active:boolean;

}

export class UpdateUserDTO extends PartialType(CreateUserDTO){}