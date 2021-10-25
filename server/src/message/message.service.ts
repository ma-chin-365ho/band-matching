import { Injectable } from '@nestjs/common';

import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    getAll():Promise<Message[]> {
        return this.messageRepository.find();
    }

    addMessage(data: any) : Promise<InsertResult> {
        return this.messageRepository.insert(data);
    }
}
