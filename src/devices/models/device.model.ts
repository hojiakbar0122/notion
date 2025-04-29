import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "../../users/models/user.model"

interface DeviceCreationAttr{
    userId:number
    name:string
    last_active:Date
    location:string
    information:JSON
}

@Table({tableName:"devices"})
export class Device extends Model<Device, DeviceCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER
    })
    userId:number

    @Column({
        type:DataType.STRING
    })
    name:string

    @Column({
        type:DataType.DATE
    })
    last_active:Date

    @Column({
        type:DataType.STRING
    })
    location:string

    @Column({
        type:DataType.JSON
    })
    information:JSON

    @BelongsTo(()=>User)
    user:User
}