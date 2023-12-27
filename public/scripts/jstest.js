// index.js (or your main file)
const fastify = require('fastify')();
const path = require('path');

fastify.register(require('fastify-nunjucks'), {
    templates: path.join(__dirname, 'views'),
});

fastify.get('/login', async (request, reply) => {
    reply.view('login.html');
});

fastify.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server listening on http://localhost:3000');
});