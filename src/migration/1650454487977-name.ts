import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650454487977 implements MigrationInterface {
    name = 'name1650454487977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tweet" ("id" SERIAL NOT NULL, "tweet" character varying, "userId" integer, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', " updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "userName" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', " updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_a9703cf826200a2d155c22eda96" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_a9703cf826200a2d155c22eda96"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
    }

}
