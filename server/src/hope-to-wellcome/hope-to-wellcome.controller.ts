import { Controller, Get, Post, Body } from '@nestjs/common';
import { HopeToWellcomeService } from './hope-to-wellcome.service';

@Controller('hope-to-wellcome')
export class HopeToWellcomeController {
    constructor(private readonly hopeToWellcomeService: HopeToWellcomeService) {}

    @Get('/')
    root():Promise<any[]> {
        return this.hopeToWellcomeService.getAll();
    }

    @Post()
    async send(@Body() form:any):Promise<void> {
        await this.hopeToWellcomeService.addHopeToWellcome(form);
    }
}
