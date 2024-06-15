import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private _employee: any;
    public get customer(): any {
        return this._employee;
    }

    public set customer(value:any) {
        this._employee = value;
    }

    async onModuleInit() {
        await this.$connect();
    }
}