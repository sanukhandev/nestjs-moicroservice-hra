import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    createdTime: Date;
    @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
    updatedTime: Date;
    @Column('integer', { default: 1 })
    status: number;
}