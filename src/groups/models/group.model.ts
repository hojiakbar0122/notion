import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "../../users/models/user.model"

interface GroupCreationAttr{
    name:string
    icon:string
    description:string
    created_by:number
}

@Table({tableName:"groups"})
export class Group extends Model<Group, GroupCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @Column({
        type:DataType.STRING
    })
    name:string

    @Column({
        type:DataType.STRING
    })
    icon:string

    @Column({
        type:DataType.INTEGER
    })
    description:string

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER
    })
    created_by:number

    @BelongsTo(()=>User)
    user:User
}
