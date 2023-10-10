import Fastify from 'fastify';
import dotenv from 'dotenv';

const fastify = Fastify({
  logger: true
})

dotenv.config();

fastify.register(await import('./routes/user.route.js'), { prefix: '/v1' });
await fastify.listen({ port: 3000 });
fastify.log.info(`Server listening on ${fastify.server.address().port}`);
