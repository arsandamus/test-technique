module.exports = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:4000/todos',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 8000,
  };