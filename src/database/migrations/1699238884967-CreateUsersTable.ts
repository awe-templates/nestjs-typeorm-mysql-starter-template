import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class addUsersTable1632265766763 implements MigrationInterface {
  private readonly usersTableName = "users"

  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
        isUnique: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()"
      }),
      new TableColumn({
        name: "name",
        type: "varchar",
        isNullable: false,
        length: "50"
      }),
      new TableColumn({
        name: "surname",
        type: "varchar",
        isNullable: false,
        length: "50"
      }),
      new TableColumn({
        name: "email",
        type: "varchar",
        isNullable: false,
        isUnique: true,
        length: "100"
      }),
      new TableColumn({
        name: "password",
        type: "varchar",
        isNullable: false,
        length: "128"
      }),
      new TableColumn({
        name: "is_active",
        type: "boolean",
        isNullable: true,
        default: true
      }),
      new TableColumn({
        name: "created_at",
        type: "timestamptz",
        isNullable: true,
        default: `CURRENT_TIMESTAMP`
      }),
      new TableColumn({
        name: "created_by",
        type: "uuid",
        isNullable: true
      }),
      new TableColumn({
        name: "updated_at",
        type: "timestamptz",
        isNullable: true
        // default: `CURRENT_TIMESTAMP`,
      }),
      new TableColumn({
        name: "updated_by",
        type: "uuid",
        isNullable: true,
        default: null
      }),
      new TableColumn({
        name: "deleted_at",
        type: "timestamptz",
        isNullable: true
        // default: `CURRENT_TIMESTAMP`,
      }),
      new TableColumn({
        name: "deleted_by",
        type: "uuid",
        isNullable: true,
        default: null
      })
    ]

    await queryRunner.createTable(
      new Table({
        name: this.usersTableName,
        columns: columns
      }),
      true,
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.usersTableName, true, true, true)
  }
}
