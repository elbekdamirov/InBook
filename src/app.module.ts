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
import { CategoriesModule } from "./categories/categories.module";
import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.contstants";
import { BotModule } from "./bot/bot.module";
import { BooksModule } from "./books/books.module";
import { BookVersionModule } from "./book-version/book-version.module";
import { Book } from "./books/models/book.model";
import { BookVersion } from "./book-version/models/book-version.model";
import { AudioBookModule } from "./audio-book/audio-book.module";
import { AudioBook } from "./audio-book/models/audio-book.model";
import { AudioPartsModule } from "./audio-parts/audio-parts.module";
import { AudioPart } from "./audio-parts/models/audio-part.model";
import { Bot } from "./bot/models/bot.model";
import { Otp } from "./users/models/otp.model";

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN!,
        middlewares: [],
        include: [BotModule],
      }),
    }),

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
      models: [
        User,
        Admin,
        Genre,
        Language,
        Author,
        Book,
        BookVersion,
        AudioBook,
        AudioPart,
        Bot,
        Otp,
      ],
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

    BotModule,

    BooksModule,

    BookVersionModule,

    AudioBookModule,

    AudioPartsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
