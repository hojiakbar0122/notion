import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        example:"userName",
        description:"Foydalanuvchi ismi"
    })
    first_name:string

    @ApiProperty({
        example:"userSurname",
        description:"Foydalanuvchi familiyasi"
    })
    last_name:string

    @ApiProperty({
        example:"user1@mail.uz",
        description:"Foydalanuvchi emaili"
    })
    email:string

    @ApiProperty({
        example:"user123",
        description:"Foydalanuvchi paroli"
    })
    password:string

    @ApiProperty({
        example:"image",
        description:"Foydalanuvchi rasmi"
    })
    photo:string
    refresh_token:string
    is_active:boolean
}
