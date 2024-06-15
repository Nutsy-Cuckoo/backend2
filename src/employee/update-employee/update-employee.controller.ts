import { Body, Controller, HttpCode, HttpStatus, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateEmployeeRequest } from './update-employee-request';
import { PrismaService } from 'src/prisma.service';

@ApiTags('')
@Controller('employees')
export class UpdateEmployeeController {
  constructor(private readonly prismaService: PrismaService) {}

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiOperation({ operationId: 'updateEmployee' })
  @HttpCode(204)
  async execute(@Param('id') id: string, @Body() request: UpdateEmployeeRequest): Promise<void> {
    await this.prismaService.employee.update({
      where: {
        id: id,
      },
      data: {
        firstName: request.firstName,
        lastName: request.lastName,
        gender: request.gender,
        address: request.address,
      },
    });
  }
}
