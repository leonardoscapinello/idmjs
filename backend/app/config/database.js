module.exports = {
  development: {
    username: 'idm',
    password: '9wjnfJHEhJjkC4he',
    database: 'idm_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    username: 'idm',
    password: '9wjnfJHEhJjkC4he',
    database: 'idm_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  production: {
    username: 'idm',
    password: '9wjnfJHEhJjkC4he',
    database: 'idm_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
    logging: false,
  },
}.development;
