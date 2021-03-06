import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

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
    @ManyToOne(type => User, user => user.tenant)
    user: User;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    createdTime: Date;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    updatedTime: Date;
    @Column('integer', { default: 1 })
    status: number;
}
    