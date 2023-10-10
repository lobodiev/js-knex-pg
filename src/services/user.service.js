import UserRepository from "../repositories/user.repository.js";
import UserDto from "../dto/user.dto.js";

const repository = new UserRepository();

class UserService {

  async findAll(offset = 0, limit = 10, sort = 'desc') {
    return await repository.findAll(offset, limit, sort);
  }

  async findOne(id) {
    return await repository.findOne(id);
  }

  async create(data) {
    let userDto = new UserDto();
    userDto.name = data.name;
    userDto.address = data.address;

    return await repository.create(userDto);
  }

  async update(id, data) {
    let userDto = new UserDto();
    userDto.name = data.name;
    userDto.address = data.address;

    return await repository.update(id, userDto);
  }

  async delete(id) {
    return await repository.delete(id);
  }

}

export default UserService;
