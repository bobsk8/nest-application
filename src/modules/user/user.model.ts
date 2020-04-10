import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastname: string

    @Column()
    username: string

    @Column()
    password: string
}
