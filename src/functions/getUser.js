const { app } = require('@azure/functions');
const { User } = require('../../models');

app.http('getUser', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const users = await User.findAll();
            const plainusers = users.map(user => user.toJSON());
            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: plainusers
            };
        } catch (error) {
            context.log('Error fetching users:', error);
            return {
                status: 500,
                body: `Internal Server Error: ${error.message}`
            };
        }
    }
});
