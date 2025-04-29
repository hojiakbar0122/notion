import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { BlockProperty } from "src/block-property/models/block-property.model"
import { Property } from "src/property/models/property.model"
import { Type } from "src/type/models/type.model"
import { User } from "src/users/models/user.model"

interface BlockCreationAttr{
    typeId:number
    created_by:number
    parent:number
    order_index:number
}

@Table({tableName:"block"})
export class Block extends Model<Block, BlockCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @ForeignKey(()=>Type)
    @Column({
        type:DataType.INTEGER
    })
    typeId:number

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER
    })
    created_by:number

    // @ForeignKey(()=>Block)
    @Column({
        type:DataType.INTEGER
    })
    parent:number

    @Column({
        type:DataType.INTEGER
    })
    order_index:number

    @BelongsTo(()=>Type)
    type:Type

    @BelongsTo(()=>User)
    user:User

    @BelongsToMany(()=>Property, ()=>BlockProperty)
    properties:Property[]
}