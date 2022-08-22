const sequelize = require('sequelize');

let db = null;
if(process.env.DB_ENV == 'development'){
  db = new sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})
}else{
  db  = new sequelize(process.env.DATABASE_URL, {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }
  );
}



module.exports = db;
