import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from "typeorm"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string

  @Column({ type: "varchar", length: 50, nullable: false })
  surname: string

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  email: string

  @Column({ type: "varchar", length: 128, nullable: false })
  password: string

  @Column({ type: "boolean", nullable: true, default: true })
  is_active: boolean

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date

  @Column({ type: "bigint", nullable: true })
  created_by: number

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date

  @Column({ type: "bigint", nullable: true, default: null })
  updated_by: number

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: Date

  @Column({ type: "bigint", nullable: true, default: null })
  deleted_by: number
}
