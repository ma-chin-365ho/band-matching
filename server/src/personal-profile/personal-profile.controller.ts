import { Controller, Get, Post, Body } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';

@Controller('personal-profile')
export class PersonalProfileController {
    constructor(private readonly personalProfileService: PersonalProfileService) {}

    @Get('/')
    root():Promise<any[]> {
        return this.personalProfileService.getAll();
    }

    @Post()
    async send(@Body() form:any):Promise<void> {
        await this.personalProfileService.addPersonalProfile(form);
    }
}
