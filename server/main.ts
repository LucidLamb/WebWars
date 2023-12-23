import Fastify from 'fastify';
import view from '@fastify/view';
import fstatic from '@fastify/static';
import * as nunjucks from 'nunjucks';
import * as path from 'node:path';
import { Kysely, SqliteDialect } from 'kysely';
import * as SQLite from 'better-sqlite3'
import { DB } from 'kysely-codegen';

const fastify = Fastify({
  logger: true
})


const kysely = new Kysely<DB>({
  dialect: new SqliteDialect({
    database: new SQLite('wars.db')
  })
});

fastify.register(view, {
  engine: {
    nunjucks,
  },
  root: path.join(__dirname, "../server/views")
});

fastify.register(fstatic, {
  root: path.join(__dirname, '../public'),
  prefix: '/public/', // optional: default '/'
})

fastify.get('/', function (request, reply) {
  reply.view('base/main.html')
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})