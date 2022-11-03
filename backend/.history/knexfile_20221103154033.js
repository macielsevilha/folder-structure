// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'd-doc',
      user:     'mysql',
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
