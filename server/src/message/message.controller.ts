import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get('/')
    root():Promise<any[]> {
        return this.messageService.getAll();
    }

    @Post()
    async send(@Body() form:any):Promise<void> {
        await this.messageService.addMessage(form);
    }
}
