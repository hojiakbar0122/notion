import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Block } from "src/blocks/models/block.model"
import { Property } from "src/property/models/property.model"

interface BlockPropertyCreationAttr{
    blockId:number
    propertyId:number
    value:string
}

@Table({tableName:"block-property"})
export class BlockProperty extends Model<BlockProperty, BlockPropertyCreationAttr>{
    @ForeignKey(()=>Block)
    @Column({
        type:DataType.INTEGER
    })
    blockId:number

    @ForeignKey(()=>Property)
    @Column({
        type:DataType.INTEGER
    })
    propertyId:number

    @Column({
        type:DataType.STRING
    })
    value:string
    
    @BelongsTo(()=>Block)
    block:Block

    @BelongsTo(()=>Property)
    property:Property
}
