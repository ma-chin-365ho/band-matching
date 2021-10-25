import {MigrationInterface, QueryRunner} from "typeorm";

export class mig1635160524128 implements MigrationInterface {
    name = 'mig1635160524128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`band_member\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bandId\` int NOT NULL, \`memberId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`band_profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`overview\` varchar(255) NOT NULL, \`introduction\` varchar(255) NOT NULL, \`leaderId\` int NOT NULL, \`url\` varchar(255) NOT NULL, \`genre\` int NOT NULL, \`status\` int NOT NULL, \`activityArea\` varchar(255) NOT NULL, \`activityDate\` varchar(255) NOT NULL, \`directionId\` int NOT NULL, \`isOnlineAllow\` tinyint NOT NULL, \`recruitmentPart\` int NOT NULL, \`ruleLowerAge\` int NOT NULL, \`ruleUpperAge\` int NOT NULL, \`ruleSex\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`message\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bandId\` int NOT NULL, \`msgSeq\` int NOT NULL, \`senderUserId\` int NOT NULL, \`msg\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`personal_profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`loginId\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`part\` int NOT NULL, \`url\` varchar(255) NOT NULL, \`genre\` int NOT NULL, \`likeArtist\` varchar(255) NOT NULL, \`activityArea\` varchar(255) NOT NULL, \`activityDate\` varchar(255) NOT NULL, \`isOnlineAllow\` tinyint NOT NULL, \`isHopeToJoin\` tinyint NOT NULL, \`directionId\` int NOT NULL, \`introduction\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`personal_profile\``);
        await queryRunner.query(`DROP TABLE \`message\``);
        await queryRunner.query(`DROP TABLE \`band_profile\``);
        await queryRunner.query(`DROP TABLE \`band_member\``);
    }

}
