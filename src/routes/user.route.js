import UserController from "../controllers/user.controller.js";

const UserRoute = async (fastify) => {
  fastify.get(`/api/v1/users`, new UserController().findAll);
  fastify.get(`/api/v1/users/:id`, new UserController().findOne);
  fastify.post(`/api/v1/users`, new UserController().create);
  fastify.patch(`/api/v1/users/:id`, new UserController().update);
  fastify.delete(`/api/v1/users/:id`, new UserController().remove);
};

export default UserRoute;
