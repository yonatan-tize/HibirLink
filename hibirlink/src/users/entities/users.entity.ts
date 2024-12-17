import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class Users{

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  username: string

  @Column({unique: true})
  email: string

  @Column()
  password: string
}