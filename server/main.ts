import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send({ purpose: 'Web Wars!' })
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})