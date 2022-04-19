import {MigrationInterface, QueryRunner} from "typeorm";

export class user1650365826894 implements MigrationInterface {
    name = 'user1650365826894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "userName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:55:19.633571'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:55:19.633571'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "userName" SET NOT NULL`);
    }

}
