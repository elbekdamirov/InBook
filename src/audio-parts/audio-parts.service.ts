import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { AudioPart } from "./models/audio-part.model";
import { CreateAudioPartDto } from "./dto/create-audio-part.dto";
import { UpdateAudioPartDto } from "./dto/update-audio-part.dto";

@Injectable()
export class AudioPartsService {
  constructor(
    @InjectModel(AudioPart)
    private readonly audioPartModel: typeof AudioPart
  ) {}

  async create(createAudioPartDto: CreateAudioPartDto): Promise<AudioPart> {
    return await this.audioPartModel.create(createAudioPartDto);
  }

  async findAll(): Promise<AudioPart[]> {
    return await this.audioPartModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<AudioPart> {
    const audioPart = await this.audioPartModel.findByPk(id, {
      include: { all: true },
    });
    if (!audioPart)
      throw new NotFoundException(`AudioPart with id ${id} not found`);
    return audioPart;
  }

  async update(
    id: number,
    updateAudioPartDto: UpdateAudioPartDto
  ): Promise<AudioPart> {
    const audioPart = await this.findOne(id);
    return await audioPart.update(updateAudioPartDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const audioPart = await this.findOne(id);
    await audioPart.destroy();
    return { message: `AudioPart with id ${id} deleted` };
  }
}
