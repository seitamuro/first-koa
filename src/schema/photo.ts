import type { Relation } from "typeorm";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PhotoMetadata } from "./photometadata";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @OneToOne(() => PhotoMetadata)
  @JoinColumn()
  metadata!: Relation<PhotoMetadata>;
}
