import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tenant } from "./tenant.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @OneToOne(type => Tenant, tenant => tenant.user)
    tenant: Tenant;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    createdTime: Date;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    updatedTime: Date;
    @Column('integer', { default: 1 })
    status: number;
}