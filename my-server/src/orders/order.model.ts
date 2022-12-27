import { ApiProperty } from '@nestjs/swagger';
import {Column, Table, Model} from 'sequelize-typescript';
// import {Model} from 'sequelize/types';
@Table
export class Order extends Model {
    @Column
    @ApiProperty()
    id: number;
    @Column
    @ApiProperty()
    orderid: number;
    @Column
    @ApiProperty()
    ordername: string;
    @Column
    @ApiProperty()
    price: number;

}