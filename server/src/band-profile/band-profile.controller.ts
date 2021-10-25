import { Controller, Get, Post, Body } from '@nestjs/common';
import { BandProfileService } from './band-profile.service';

@Controller('band-profile')
export class BandProfileController {
    constructor(private readonly bandProfileService: BandProfileService) {}

    @Get('/')
    root():Promise<any[]> {
        return this.bandProfileService.getAll();
    }

    @Post()
    async send(@Body() form:any):Promise<void> {
        await this.bandProfileService.addBandProfile(form);
    }
}
