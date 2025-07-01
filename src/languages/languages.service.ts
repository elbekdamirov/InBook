import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "./models/language.model";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language)
    private readonly languageModel: typeof Language
  ) {}

  async create(createLanguageDto: CreateLanguageDto): Promise<Language> {
    return this.languageModel.create(createLanguageDto);
  }

  async findAll(): Promise<Language[]> {
    return this.languageModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Language> {
    const language = await this.languageModel.findByPk(id, {
      include: { all: true },
    });
    if (!language)
      throw new NotFoundException(`Language with id ${id} not found`);
    return language;
  }

  async update(
    id: number,
    updateLanguageDto: UpdateLanguageDto
  ): Promise<Language> {
    const language = await this.findOne(id);
    return language.update(updateLanguageDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const language = await this.findOne(id);
    await language.destroy();
    return { message: `Language with id ${id} deleted` };
  }
}
