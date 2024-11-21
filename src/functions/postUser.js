const {User} = require('../../models');
const { app } = require('@azure/functions');


app.http('postUser', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (context, req) => {
    try
    {
        const {username, name, lastname, email, password_hash} = req.body;

        if (!username || !name || !lastname || !email || !password_hash) {
            context.res = {
                status: 400,
                body: 'Bad Request: Missing required fields (username, name, lastname, email, password_hash).'
            };
            return;
        }

        const bcrypt = require('bcrypt');  
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password_hash, saltRounds);

        const newUser = await User.create({
            username,
            name,
            lastname,
            email,
            passwordHash
        });

        context.res = {
            status: 201,
            body: newUser
        }
    }
    catch(error)
    {
        context.res = {
            status: 400,
            body: error.message
        }
    }
}});