import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HopeToJoin {
    @PrimaryGeneratedColumn()
    id              : number;

    @Column()
    fromPersonalId        : number;

    @Column()
    toBandId        : number;
};