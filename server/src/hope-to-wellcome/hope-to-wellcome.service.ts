import { Injectable } from '@nestjs/common';

import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HopeToWellcome } from '../entities/hopeToWellcome.entity';

@Injectable()
export class HopeToWellcomeService {
    constructor(
        @InjectRepository(HopeToWellcome)
        private readonly hopeToWellcomeRepository: Repository<HopeToWellcome>
    ) {}

    getAll():Promise<HopeToWellcome[]> {
        return this.hopeToWellcomeRepository.find();
    }
    
    addHopeToWellcome(data: any) : Promise<InsertResult> {
        return this.hopeToWellcomeRepository.insert(data);
    }
}
