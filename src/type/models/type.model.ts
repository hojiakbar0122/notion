import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Block } from "src/blocks/models/block.model"

interface TypeCreationAttr{
    name:string
    description:string
}

@Table({tableName:"type"})
export class Type extends Model<Type, TypeCreationAttr>{
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

    @HasMany(()=>Block)
    blocks:Block[]
}
