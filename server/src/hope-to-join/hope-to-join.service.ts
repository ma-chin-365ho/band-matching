import { Injectable } from '@nestjs/common';

import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HopeToJoin } from '../entities/hopeToJoin.entity';

@Injectable()
export class HopeToJoinService {
    constructor(
        @InjectRepository(HopeToJoin)
        private readonly hopeToJoinRepository: Repository<HopeToJoin>
    ) {}

    getAll():Promise<HopeToJoin[]> {
        return this.hopeToJoinRepository.find();
    }
    
    addHopeToJoin(data: any) : Promise<InsertResult> {
        return this.hopeToJoinRepository.insert(data);
    }
}
