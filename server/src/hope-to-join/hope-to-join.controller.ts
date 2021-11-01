import { Controller, Get, Post, Body } from '@nestjs/common';
import { HopeToJoinService } from './hope-to-join.service';

@Controller('hope-to-join')
export class HopeToJoinController {
    constructor(private readonly hopeToJoinService: HopeToJoinService) {}

    @Get('/')
    root():Promise<any[]> {
        return this.hopeToJoinService.getAll();
    }

    @Post()
    async send(@Body() form:any):Promise<void> {
        await this.hopeToJoinService.addHopeToJoin(form);
    }
}
