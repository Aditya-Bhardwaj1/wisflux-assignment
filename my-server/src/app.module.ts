import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientsService } from './ingredients/ingredients.service';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      // database: 'pizzastore',
      synchronize: true,
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController, OrdersController, IngredientsController, CartController],
  providers: [AppService, UsersService, OrdersService, IngredientsService, CartService],
  
})
export class AppModule {}
