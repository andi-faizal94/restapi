import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { User } from "./User";
@Entity()
export class Tweet extends BaseEntity {
  @PrimaryGeneratedColumn({type:"int"})
  id: number;

  @Column({ type:"text" ,nullable: true })
  tweet: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", default: "now()" })
  createdAt: Date;

  @UpdateDateColumn({
    name: " updated_at",
    type: "timestamp",
    nullable: true,
    default: null,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    name: "deleted_at",
    type: "timestamp",
    nullable: true,
    default: null,
  })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.tweets, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
