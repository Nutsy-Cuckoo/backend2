import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeRequest {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly firstName : string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly lastName? : string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly gender : string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly address : string;
}