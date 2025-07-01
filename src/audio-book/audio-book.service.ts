import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { AudioBook } from "./models/audio-book.model";
import { CreateAudioBookDto } from "./dto/create-audio-book.dto";
import { UpdateAudioBookDto } from "./dto/update-audio-book.dto";

@Injectable()
export class AudioBookService {
  constructor(
    @InjectModel(AudioBook)
    private readonly audioBookModel: typeof AudioBook
  ) {}

  async create(createAudioBookDto: CreateAudioBookDto): Promise<AudioBook> {
    return await this.audioBookModel.create(createAudioBookDto);
  }

  async findAll(): Promise<AudioBook[]> {
    return await this.audioBookModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<AudioBook> {
    const audioBook = await this.audioBookModel.findByPk(id, {
      include: { all: true },
    });
    if (!audioBook)
      throw new NotFoundException(`AudioBook with id ${id} not found`);
    return audioBook;
  }

  async update(
    id: number,
    updateAudioBookDto: UpdateAudioBookDto
  ): Promise<AudioBook> {
    const audioBook = await this.findOne(id);
    return await audioBook.update(updateAudioBookDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const audioBook = await this.findOne(id);
    await audioBook.destroy();
    return { message: `AudioBook with id ${id} deleted` };
  }
}
