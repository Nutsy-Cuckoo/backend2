import { Module } from '@nestjs/common';
import { CreateEmployeeController } from 'src/employee/create-employee/create-employee.controller';
import { DeleteEmployeeController } from 'src/employee/delete-employee/delete-employee.controller';
import { GetEmployeeListController } from 'src/employee/get-employee-list/get-employee-list.controller';
import { UpdateEmployeeController } from 'src/employee/update-employee/update-employee.controller';
import { PrismaModule } from 'src/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [
    CreateEmployeeController,
    DeleteEmployeeController,
    GetEmployeeListController,
    UpdateEmployeeController
  ],
  providers: [],
  exports: [],
})
export class ApiModule {}
