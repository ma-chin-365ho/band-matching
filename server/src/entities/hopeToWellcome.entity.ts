import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HopeToWellcome {
    @PrimaryGeneratedColumn()
    id              : number;

    @Column()
    fromBandId        : number;

    @Column()
    toPersonalId        : number;
};