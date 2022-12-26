import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { UsersService } from './users.service';


@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get()
    @ApiParam({ name: 'id' })
    findOne(@Param() params ): Promise<User> {
        return this.userService.findOne(params.id);
    }
    @Post()
    create(@Body() user): Promise<User> {
        return this.userService.create(user);
    }
    @Put()
    @ApiParam({ name: 'id' })
    update(@Param() params,@Body() user): Promise<User> {
        return this.userService.update(params.id, user);
    }
}
