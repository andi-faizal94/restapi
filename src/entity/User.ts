import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Tweet } from "./Tweet";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({type:"int"})
  id: number;

  @Column({ type:"varchar", nullable: true })
  userName: string;

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

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];
}
