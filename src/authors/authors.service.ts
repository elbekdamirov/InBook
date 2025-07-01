import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Author } from "./models/author.model";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author)
    private readonly authorModel: typeof Author
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return await this.authorModel.create(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return await this.authorModel.findAll();
  }

  async findOne(id: number): Promise<Author> {
    const author = await this.authorModel.findByPk(id);
    if (!author) throw new NotFoundException(`Author with id ${id} not found`);
    return author;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const author = await this.findOne(id);
    return await author.update(updateAuthorDto);
  }

  async remove(id: number): Promise<{ message: string }> {
    const author = await this.findOne(id);
    await author.destroy();
    return { message: `Author with id ${id} deleted` };
  }
}
