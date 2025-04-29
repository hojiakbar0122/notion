import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"
import { BlockProperty } from "src/block-property/models/block-property.model"
import { Block } from "src/blocks/models/block.model"

interface PropertyCreationAttr{
    name:string
    description:string
}

@Table({tableName:"property"})
export class Property extends Model<Property, PropertyCreationAttr>{
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
    description:string

    @BelongsToMany(()=>Block, ()=>BlockProperty)
    blocks:Block[]
}
