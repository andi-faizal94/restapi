import {MigrationInterface, QueryRunner} from "typeorm";

export class name1651248729866 implements MigrationInterface {
    name = 'name1651248729866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tweet" ("id" SERIAL NOT NULL, "tweet" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', " updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "user_id" integer, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "userName" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', " updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_d0f0cd7238f1c93d3e78f0fcdcf" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_d0f0cd7238f1c93d3e78f0fcdcf"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
    }

}
