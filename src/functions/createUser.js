const { app } = require('@azure/functions');
const {User}  = require('../../models');
const bcrypt = require('bcrypt');
app.http('createUser', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const data = await request.json();
        const {username, name, lastname, email, password_hash} = data;
        if(!username || !name || !lastname || !email || !password_hash) {
            return {
                status: 400,
                body: 'Missing required fields'
            };
            return;
        }
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password_hash, saltRounds);
        const newUser = await User.create({
            username,
            name,
            lastname,
            email,
            passwordHash: passwordHash
        });
        return {
            status: 201,
            body: {
                id: newUser.id,
                username: newUser.username,
                name: newUser.name,
                lastname: newUser.lastname,
                email: newUser.email
                }
            };
        }
    }
);

