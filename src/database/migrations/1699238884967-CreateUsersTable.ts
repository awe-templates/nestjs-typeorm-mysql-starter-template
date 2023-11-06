import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class addUsersTable1632265766763 implements MigrationInterface {
  private readonly usersTableName = "users"

  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      new TableColumn({
        name: "id",
        type: "bigint",
        isPrimary: true,
        isUnique: true
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
        type: "timestamp",
        default: `CURRENT_TIMESTAMP`
      }),
      new TableColumn({
        name: "created_by",
        type: "bigint",
        isNullable: true
      }),
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        default: `CURRENT_TIMESTAMP`
      }),
      new TableColumn({
        name: "updated_by",
        type: "bigint",
        isNullable: true,
        default: null
      }),
      new TableColumn({
        name: "deleted_at",
        type: "timestamp",
        isNullable: true
      }),
      new TableColumn({
        name: "deleted_by",
        type: "bigint",
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
