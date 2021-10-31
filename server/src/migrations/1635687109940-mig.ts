import {MigrationInterface, QueryRunner} from "typeorm";

export class mig1635687109940 implements MigrationInterface {
    name = 'mig1635687109940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`personal_profile\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`personal_profile\` DROP COLUMN \`password\``);
    }

}
