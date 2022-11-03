// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
     
  port: '3005',
  host: 'localhost',
  database: 'database',
  user: 'root',

    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
