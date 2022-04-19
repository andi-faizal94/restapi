import {MigrationInterface, QueryRunner} from "typeorm";

export class user1650365705381 implements MigrationInterface {
    name = 'user1650365705381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_e7fb403cff8a6a4613e1fbcdb66"`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "tweetId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_e7fb403cff8a6a4613e1fbcdb66" FOREIGN KEY ("tweetId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_e7fb403cff8a6a4613e1fbcdb66"`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:50:19.589635'`);
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "tweetId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_e7fb403cff8a6a4613e1fbcdb66" FOREIGN KEY ("tweetId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2022-04-19 10:50:19.589635'`);
    }

}
