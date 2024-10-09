import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryColumn()
    id: number
}
