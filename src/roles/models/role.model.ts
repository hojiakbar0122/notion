import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Admin } from "src/admins/models/admin.model"

interface RoleCreationAttr{
    name:string
    description:string
}

@Table({tableName:"role"})
export class Role extends Model<Role, RoleCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:string

    @Column({
        type:DataType.STRING
    })
    name:string

    @Column({
        type:DataType.TEXT
    })
    description:string

    @HasMany(()=>Admin)
    admins:Admin[]
}
