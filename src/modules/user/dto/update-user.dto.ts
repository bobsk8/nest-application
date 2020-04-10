import { IsString, IsInt } from 'class-validator';

export class UpdateUserDto {
    
    @IsString()
    name: String;
    @IsInt()
    age: number;    
}