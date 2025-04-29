import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlocksModule } from './blocks/blocks.module';
import { TypeModule } from './type/type.module';
import { Type } from './type/models/type.model';
import { Block } from './blocks/models/block.model';
import { PropertyModule } from './property/property.module';
import { BlockPropertyModule } from './block-property/block-property.module';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { RolesModule } from './roles/roles.module';
import { Property } from './property/models/property.model';
import { Role } from './roles/models/role.model';
import { BlockProperty } from './block-property/models/block-property.model';
import { User } from './users/models/user.model';
import { Admin } from './admins/models/admin.model';
import { AuthModule } from './auth/auth.module';
import { DevicesModule } from './devices/devices.module';
import { GroupsModule } from './groups/groups.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { TeamSpaceModule } from './team_space/team_space.module';
import { PermissionsModule } from './permissions/permissions.module';
import { TeamSpaceMembersModule } from './team_space_members/team_space_members.module';
import { WorkspaceMembersModule } from './workspace_members/workspace_members.module';
import { GroupMembersModule } from './group_members/group_members.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:".env", isGlobal:true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host:process.env.PG_HOST,
      port:Number(process.env.PG_PORT),
      username:process.env.PG_USER,
      password:process.env.PG_PASSWORD,
      database:process.env.PG_DB,
      models:[Type, Block, Property, Role, BlockProperty, User, Admin],
      autoLoadModels:true,
      sync:{alter:true},
      logging:true
    }),
    BlocksModule,
    TypeModule,
    PropertyModule,
    BlockPropertyModule,
    UsersModule,
    AdminsModule,
    RolesModule,
    AuthModule,
    DevicesModule,
    GroupsModule,
    WorkspaceModule,
    TeamSpaceModule,
    PermissionsModule,
    TeamSpaceMembersModule,
    WorkspaceMembersModule,
    GroupMembersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
