/* LINED OUT

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

// index.js continued
const kysely = require('kysely');
const db = kysely({
    client: 'sqlite',
    useNullAsDefault: true,
    connection: {
        filename: './database.sqlite',
    },
});

fastify.post('/login', async (request, reply) => {
    const { username, password } = request.body;

    // Validate the username and password (add your validation logic)

    // Check credentials in the database
    const user = await db('users').where({ username, password }).first();

    if (user) {
        // User authenticated
        reply.send('Login successful');
    } else {
        // Invalid credentials
        reply.send('Invalid username or password');
    }
});
