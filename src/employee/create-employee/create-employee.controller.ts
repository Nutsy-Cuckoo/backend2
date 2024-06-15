import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from  "@nestjs/swagger";
import { CreateEmployeeResponse } from './create-employee-response';
import { CreateEmployeeRequest } from "./create-employee-request";
// import { ErrorRequestModel } from 'src/api/api.exception';
import { PrismaService } from "src/prisma.service";

 @ApiTags('')
 @Controller('employees')
 export class CreateEmployeeController {
    constructor (private readonly prismaService: PrismaService) {}

    @Post()
    @ApiResponse({status: HttpStatus.OK, description:'', type: CreateEmployeeResponse})
    // @ApiResponse({status: HttpStatus.NOT_FOUND, description:'', type:ErrorResponseModel})
    @ApiOperation({operationId:'createEmployee'})
    @HttpCode(201)

    async execute(@Body() request: CreateEmployeeRequest): Promise<CreateEmployeeResponse> {
        const result = await this.prismaService.employee.create({
            data: {
                firstName: request.firstName,
                lastName: request.lastName,
                gender: request.gender,
                address: request.address,
            }
        });
        return {
            id: result.id,
        };
    }
}