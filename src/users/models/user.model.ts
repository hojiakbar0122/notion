import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Block } from "src/blocks/models/block.model"
import { Device } from "../../devices/models/device.model"
import { Group } from "../../groups/models/group.model"

interface UserCreationAttr{
    first_name:string
    last_name:string
    email:string
    password:string
    photo:string
    refresh_token:string
    is_active:boolean
}

@Table({tableName:"user"})
export class User extends Model<User, UserCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @Column({
        type:DataType.STRING
    })
    declare first_name:string

    @Column({
        type:DataType.STRING
    })
    declare last_name:string

    @Column({
        type:DataType.STRING
    })
    declare email:string

    @Column({
        type:DataType.STRING
    })
    declare password:string

    @Column({
        type:DataType.STRING
    })
    declare photo:string

    @Column({
        type:DataType.STRING
    })
    declare refresh_token:string

    @Column({
        type:DataType.STRING,

    })
    declare activation_link:string

    @HasMany(()=>Block)
    blocks:Block[]

    @HasMany(()=>Device)
    devices:Device[]

    @HasMany(()=>Group)
    groups:Group[]
}
