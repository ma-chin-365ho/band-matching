import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonalProfile {
    @PrimaryGeneratedColumn()
    id            : number;

    @Column()
    loginId       : string;

    @Column()
    name          : string;

    @Column()
    part          : number;

    @Column()
    url?          : string;

    @Column()
    genre?        : number;

    @Column()
    likeArtist?   : string;

    @Column()
    activityArea? : string;

    @Column()
    activityDate? : string;

    @Column()
    isOnlineAllow : boolean;

    @Column()
    isHopeToJoin  : boolean;

    @Column()
    directionId   : number;

    @Column()
    introduction  : string;
};
