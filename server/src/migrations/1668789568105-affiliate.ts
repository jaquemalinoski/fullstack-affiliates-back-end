import { MigrationInterface, QueryRunner } from "typeorm";

export class affiliate1668789568105 implements MigrationInterface {
    name = 'affiliate1668789568105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "affiliates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "date" character varying NOT NULL, "product" character varying NOT NULL, "amount" character varying NOT NULL, "seller" character varying NOT NULL, CONSTRAINT "PK_5458bf988fb83086da3a14b9ff9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "affiliates"`);
    }

}
