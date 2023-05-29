import { Column, Entity, ManyToOne, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('contacts')

export class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45 })
    email: string

    @Column({ length: 45 })
    phone: string

    @CreateDateColumn({ type: 'date' })
    createdAt!: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User
}   