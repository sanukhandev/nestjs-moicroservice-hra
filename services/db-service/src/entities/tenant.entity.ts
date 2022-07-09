import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tenant {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    host: string;
    @Column()
    database: string;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    createdTime: Date;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    updatedTime: Date;
    @Column('integer', { default: 1 })
    status: number;
}
    