import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BandProfile {
    @PrimaryGeneratedColumn()
    id              : number;

    @Column()
    overview        : string;

    @Column()
    introduction    : string;

    @Column()
    leaderId        : number;

    @Column()
    url?            : string;

    @Column()
    genre?          : number;

    @Column()
    status          : number;

    @Column()
    activityArea    : string;

    @Column()
    activityDate    : string;

    @Column()
    directionId     : number;

    @Column()
    isOnlineAllow   : boolean;
  
    @Column()
    recruitmentPart : number;

    @Column()
    ruleLowerAge?   : number;

    @Column()
    ruleUpperAge?   : number;

    @Column()
    ruleSex?        : number;
};