import { Injectable } from '@nestjs/common';

import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalProfile } from '../entities/personalProfile.entity';

@Injectable()
export class PersonalProfileService {
    constructor(
        @InjectRepository(PersonalProfile)
        private readonly personalProfileRepository: Repository<PersonalProfile>
    ) {}

    getAll():Promise<PersonalProfile[]> {
        return this.personalProfileRepository.find();
    }

    async findOneByLoginId(loginId: string): Promise<PersonalProfile | undefined> {
        return this.personalProfileRepository.findOne({where:{loginId: loginId}});
    }
    
    addPersonalProfile(data: any) : Promise<InsertResult> {
        return this.personalProfileRepository.insert(data);
    }
}
