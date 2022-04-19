import {MigrationInterface, QueryRunner} from "typeorm";

export class user1650365406162 implements MigrationInterface {
    name = 'user1650365406162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "tweet" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:44:14.912046'`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "tweet" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:44:14.912046'`);
    }

}
