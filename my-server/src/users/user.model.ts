import { ApiProperty } from '@nestjs/swagger';
import {Column, Table, Model} from 'sequelize-typescript';
// import {Model} from 'sequelize/types';
@Table
export class User extends Model {
    @Column
    @ApiProperty()
    name: string;
    @Column
    @ApiProperty()
    email: string;
    @Column
    @ApiProperty()
    password: string;
}