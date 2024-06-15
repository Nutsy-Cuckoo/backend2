import {
    Controller,
    Delete,
    HttpException,
    HttpStatus,
    HttpCode,
    Param,
  } from '@nestjs/common';
  import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
  import { PrismaService } from 'src/prisma.service';
  
  @ApiTags('de')
  @Controller('employees')
  export class DeleteEmployeeController {
    constructor(private readonly prismaService: PrismaService) {}
  
    @Delete(':id')
    @ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: '',
    })
    @ApiOperation({ operationId: 'deleteEmployee' })
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
      const result = await this.prismaService.employee.findUnique({
        where: { id: id },
      });
      if (!result)
        throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
      await this.prismaService.employee.delete({ where: { id: id } });
    }
  }
  