import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from "./mail/mail.module";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/model/admin.model";
import { GenresModule } from "./genres/genres.module";
import { Genre } from "./genres/models/genre.model";
import { LanguagesModule } from "./languages/languages.module";
import { Language } from "./languages/models/language.model";
import { AuthorsModule } from "./authors/authors.module";
import { Author } from "./authors/models/author.model";
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [User, Admin, Genre, Language, Author],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),

    UsersModule,

    AuthModule,

    MailModule,

    AdminModule,

    GenresModule,

    LanguagesModule,

    AuthorsModule,

    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
