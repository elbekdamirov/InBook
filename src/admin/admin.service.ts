import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./model/admin.model";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminModel: typeof Admin) {}
  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;
    if (password != confirm_password) {
      throw new BadRequestException("Parollar mos emas");
    }
    const hashed_password = await bcrypt.hash(password, 10);

    const newAdmin = await this.adminModel.create({
      ...createAdminDto,
      password: hashed_password,
    });
    return newAdmin;
  }

  findAll() {
    return this.adminModel.findAll();
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  findByEmail(email: string) {
    return this.adminModel.findOne({ where: { email } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const user = await this.findOne(id);

    if (updateAdminDto.password) {
      const hashed_password = await bcrypt.hash(updateAdminDto.password, 7);
      updateAdminDto.password = hashed_password;
    }

    await user!.update(updateAdminDto);

    return user;
  }

  async remove(id: number) {
    const res = await this.adminModel.destroy({ where: { id } });
    if (res > 0) {
      return { message: `Admin o'chirildi` };
    }
    return { message: "Bunday admin yo'q" };
  }
}
