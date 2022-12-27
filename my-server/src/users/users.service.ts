import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}

      async findAll(): Promise<User[]> {
        return this.userModel.findAll();
      }
    
      findOne(id: number): Promise<User> {
        return this.userModel.findOne({
          where: {
            id,
          },
        });
      }

    async create(newuser: User): Promise<User> {
        return this.userModel.create(
            { firstName: 'Abraham', lastName: 'Lincoln' },
        );
    }
    async update(id: number, newUser: User): Promise<User> {
        await this.userModel.update(newUser, {
            where: {
                id,
            },
        });
        const user= this.findOne(id);
        return user;
    }
    async destroy(id: number): Promise<User> {
        const user = this.findOne(id);
        this.userModel.destroy({
            where: {
                id,
            },
        });
        return user;
    }



}

// https://www.youtube.com/watch?v=ZXPva0VaNZs&ab_channel=MaheshKariya
