import UserService from "../services/user.service.js";

const service = new UserService();

class UserController {

  async findAll(request, reply) {
    const { offset, limit, sort } = request.query;

    const data = await service.findAll(offset, limit, sort);

    reply
      .code(200)
      .header(`Content-Type`, `application/json; charset=utf-8`)
      .send({
        meta: {
          code: 200,
          message: `Ok`,
        },
        data
      });
  }

  async findOne(request, reply) {
    const data = await service.findOne(request.params.id);

    reply
      .code(200)
      .header(`Content-Type`, `application/json; charset=utf-8`)
      .send({
        meta: {
          code: 200,
          message: `Ok`,
        },
        data: data.length > 0 ? data[0] : null
      });
  }

  async create(request, reply) {
    await service.create(request.body);

    reply
      .code(201)
      .header(`Content-Type`, `application/json; charset=utf-8`)
      .send({
        meta: {
          code: 201,
          message: `Created`,
        }
      });
  }

  async update(request, reply) {
    await service.update(request.params.id, request.body);

    reply
      .code(204)
      .header(`Content-Type`, `application/json; charset=utf-8`)
      .send({
        meta: {
          code: 204,
          message: `No Content`,
        }
      });
  }

  async remove(request, reply) {
    await service.delete(request.params.id);

    reply
      .code(204)
      .header(`Content-Type`, `application/json; charset=utf-8`)
      .send({
        meta: {
          code: 204,
          message: `No Content`,
        }
      });
  }

}

export default UserController;
