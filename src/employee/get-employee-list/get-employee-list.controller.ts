import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetEmployee } from './get-employee-list-response';
import { ErrorResponseModel } from 'src/api/api.exception';
import { PrismaService } from 'src/prisma.service';  

@ApiTags('')
@Controller('employees')
export class GetEmployeeListController {
    constructor(private readonly prismaService: PrismaService) { }
    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: 'List of Employee', type: [GetEmployee] })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No Employee found', type: ErrorResponseModel })
    @ApiOperation({ operationId: 'GetEmployeeList' })
    @HttpCode(200)
    async execute(): Promise<GetEmployee[]> {
        const result = await this.prismaService.employee.findMany({});
        const response = result.map((x) => {
            return {
                id: x.id,
                firstName: x.firstName,
                lastName: x.lastName,
                gender: x.gender,
                address: x.address,
            };
        });
        return response;
    }
}