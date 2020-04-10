import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {

    @IsString()
    firstName: string;

    @IsString()
    lastname: string

    @IsString()
    username: string

    @IsString()
    password: string
}
