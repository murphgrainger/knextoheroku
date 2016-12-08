// Update with your config settings.
require('dotenv').config();

module.exports = {

    development: {
        client: 'pg',
        connection: process.env.DEVELOPMENT_DATABASE_URLs
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }

};
