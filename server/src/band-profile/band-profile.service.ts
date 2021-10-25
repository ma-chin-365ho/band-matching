import { Injectable } from '@nestjs/common';

import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BandProfile } from '../entities/bandProfile.entity';

@Injectable()
export class BandProfileService {
    constructor(
        @InjectRepository(BandProfile)
        private readonly bandProfileRepository: Repository<BandProfile>
    ) {}

    getAll():Promise<BandProfile[]> {
        return this.bandProfileRepository.find();
    }

    addBandProfile(data: any) : Promise<InsertResult> {
        return this.bandProfileRepository.insert(data);
    }
}
