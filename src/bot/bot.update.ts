import { BotService } from "./bot.service";
import {
  Update,
  Start,
  Ctx,
  On,
  Hears,
  Command,
  Action,
} from "nestjs-telegraf";
import { text } from "stream/consumers";
import { Context, Markup } from "telegraf";

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    await this.botService.start(ctx);
  }

  @On("contact")
  async onContact(@Ctx() ctx: Context) {
    await this.botService.onContact(ctx);
  }

  @Command("stop")
  async onStop(@Ctx() ctx: Context) {
    await this.botService.onStop(ctx);
  }

  // @On("photo")
  // async onPhoto(@Ctx() ctx: Context) {
  //   if ("photo" in ctx.message!) {
  //     console.log(ctx.message.photo);
  //     await ctx.replyWithPhoto(
  //       String(ctx.message.photo[ctx.message.photo.length - 1].file_id)
  //     );
  //   }
  // }

  // @On("video")
  // async onVideo(@Ctx() ctx: Context) {
  //   if ("video" in ctx.message!) {
  //     console.log(ctx.message.video);
  //     await ctx.reply(String(ctx.message.video.file_name));
  //   }
  // }

  // @On("sticker")
  // async onSticker(@Ctx() ctx: Context) {
  //   if ("sticker" in ctx.message!) {
  //     console.log(ctx.message.sticker);
  //     await ctx.replyWithSticker(String(ctx.message.sticker.file_id));
  //   }
  // }

  // @On("animation")
  // async onAnimation(@Ctx() ctx: Context) {
  //   if ("animation" in ctx.message!) {
  //     console.log(ctx.message.animation);
  //     await ctx.replyWithAnimation(String(ctx.message.animation.file_id));
  //   }
  // }

  // @On("location")
  // async onLocation(@Ctx() ctx: Context) {
  //   if ("location" in ctx.message!) {
  //     console.log(ctx.message.location);
  //     await ctx.reply(String(ctx.message.location.latitude));
  //     await ctx.reply(String(ctx.message.location.longitude));
  //     await ctx.reply(String(ctx.message.location.horizontal_accuracy));
  //     await ctx.replyWithLocation(
  //       ctx.message.location.latitude,
  //       ctx.message.location.longitude
  //     );
  //   }
  // }

  // @On("voice")
  // async onVoice(@Ctx() ctx: Context) {
  //   if ("voice" in ctx.message!) {
  //     console.log(ctx.message.voice);
  //     await ctx.reply(String(ctx.message.voice.duration));
  //     await ctx.reply(String(ctx.message.voice.file_size));
  //     await ctx.reply(String(ctx.message.voice.file_unique_id));
  //     await ctx.reply(String(ctx.message.voice.mime_type));
  //     await ctx.replyWithVoice(ctx.message.voice.file_id);
  //   }
  // }

  // @On("document")
  // async onDocument(@Ctx() ctx: Context) {
  //   if ("document" in ctx.message!) {
  //     console.log(ctx.message.document);
  //     await ctx.reply(String(ctx.message.document.file_name));
  //     await ctx.reply(String(ctx.message.document.file_size));
  //     await ctx.reply(String(ctx.message.document.file_unique_id));
  //     await ctx.reply(String(ctx.message.document.mime_type));
  //     await ctx.reply(String(ctx.message.document.thumbnail?.file_id));
  //     await ctx.replyWithDocument(ctx.message.document.file_id);
  //   }
  // }

  // @Hears("hi")
  // async onHearsHi(@Ctx() ctx: Context) {
  //   await ctx.replyWithHTML("Hey there");
  // }

  // @Command("help")
  // async onCommandHelp(@Ctx() ctx: Context) {
  //   await ctx.replyWithHTML("Ertaga yordam beraman");
  // }

  // @Command("inline")
  // async onCommandInline(@Ctx() ctx: Context) {
  //   const inlineKeyboards = [
  //     [
  //       {
  //         text: "Product1",
  //         callback_data: "product_1",
  //       },
  //       {
  //         text: "Product2",
  //         callback_data: "product_2",
  //       },
  //       {
  //         text: "Product3",
  //         callback_data: "product_3",
  //       },
  //     ],
  //     [
  //       {
  //         text: "Product4",
  //         callback_data: "product_4",
  //       },
  //       {
  //         text: "Product5",
  //         callback_data: "product_5",
  //       },
  //     ],
  //     [
  //       {
  //         text: "Product6",
  //         callback_data: "product_6",
  //       },
  //     ],
  //   ];
  //   await ctx.reply("Kerakli productni tanla:", {
  //     reply_markup: {
  //       inline_keyboard: inlineKeyboards,
  //     },
  //   });
  // }

  // @Action("product_1")
  // async onActPro1(@Ctx() ctx: Context) {
  //   await ctx.replyWithHTML("Product1 tanlandi");
  // }

  // @Action("product_2")
  // async onActPro2(@Ctx() ctx: Context) {
  //   await ctx.replyWithHTML("Product2 tanlandi");
  // }

  // @Action(/product_\d+/)
  // async onActAnyProduct(@Ctx() ctx: Context) {
  //   if ("data" in ctx.callbackQuery!) {
  //     const data = ctx.callbackQuery?.data;
  //     const productId = data.split("_")[1];
  //     await ctx.replyWithHTML(`${productId} - product tanlandi`);
  //   }
  // }

  // @Command("main")
  // async onCommandMain(@Ctx() ctx: Context) {
  //   await ctx.replyWithHTML("Kerakli Main Button tanla:", {
  //     ...Markup.keyboard([
  //       ["Bir"],
  //       ["Ikki", "Uch"],
  //       ["To'rt", "Besh", "Olti"],
  //       [Markup.button.contactRequest("Telefon raqamingizni yuboring")],
  //       [Markup.button.locationRequest("Location yuboring")],
  //     ])
  //       .resize()
  //       .oneTime(),
  //   });
  // }

  // @Hears("Bir")
  // async onHearsBir(@Ctx() ctx: Context) {
  //   await ctx.replyWithHTML("Bir bosildi");
  // }

  // @On("text")
  // async onText(@Ctx() ctx: Context) {
  //   if ("text" in ctx.message!) {
  //     if (ctx.message.text == "hi") {
  //       ctx.replyWithHTML(`<b>Hello</b>`);
  //     }
  //     ctx.replyWithHTML(ctx.message.text);
  //   }
  // }

  // @On("message")
  // async onMessage(@Ctx() ctx: Context) {
  //   ctx.reply("Nazarda tutilmagan xatolik");
  // }
}
