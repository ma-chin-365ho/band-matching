import {MigrationInterface, QueryRunner} from "typeorm";

export class mig1635773816886 implements MigrationInterface {
    name = 'mig1635773816886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hope_to_join\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fromPersonalId\` int NOT NULL, \`toBandId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hope_to_wellcome\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fromBandId\` int NOT NULL, \`toPersonalId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`hope_to_wellcome\``);
        await queryRunner.query(`DROP TABLE \`hope_to_join\``);
    }

}
