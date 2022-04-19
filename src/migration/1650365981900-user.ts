import {MigrationInterface, QueryRunner} from "typeorm";

export class user1650365981900 implements MigrationInterface {
    name = 'user1650365981900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:57:25.998301'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:57:25.998301'`);
    }

}
