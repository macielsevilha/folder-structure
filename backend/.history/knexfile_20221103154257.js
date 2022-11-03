// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      connection: {
        port: '3005',
        host: 'localhost',
        database: 'database',
        user: 'root',
        password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
