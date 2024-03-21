import type { Relation } from "typeorm";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./photo";

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  height!: number;

  @Column("int")
  width!: number;

  @Column("datetime")
  createdAt!: Date;

  @OneToOne(() => Photo, (photo) => photo.metadata)
  photo!: Relation<Photo>;
}
