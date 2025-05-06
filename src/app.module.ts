import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "sqlite",
      host: "./test-db.sqlite",
      username: `${process.env.username}`,
      password: `${process.env.password}`,
      database: `${process.env.database}`,
      logging: false,
      autoLoadModels: true,
      synchronize: true
    }),
    ConfigModule.forRoot({
    isGlobal: true
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
