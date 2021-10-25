import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id              : number;

    @Column()
    bandId : number;

    @Column()
    msgSeq : number;

    @Column()
    senderUserId : number;

    @Column()
    msg : string;
};


