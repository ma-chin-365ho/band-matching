import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BandMember {
    @PrimaryGeneratedColumn()
    id              : number;

    @Column()
    bandId        : number;

    @Column()
    memberId        : number;
};