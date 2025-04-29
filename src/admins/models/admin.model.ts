import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Role } from "src/roles/models/role.model"

interface AdminCreationAttr{
    first_name:string
    email:string
    password:string
    refresh_token:string
    roleId:number
    is_active:boolean
}

@Table({tableName:"admin"})
export class Admin extends Model<Admin, AdminCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @Column({
        type:DataType.STRING
    })
    first_name:string

    @Column({
        type:DataType.STRING
    })
    email:string

    @Column({
        type:DataType.STRING
    })
    password:string

    @Column({
        type:DataType.STRING
    })
    refresh_token:string

    @ForeignKey(()=>Role)
    @Column({
        type:DataType.INTEGER,

    })
    roleId:number

    @Column({
        type:DataType.BOOLEAN,

    })
    is_active:boolean

    @BelongsTo(()=>Role)
    role:Role
}
