const sequelize = require('sequelize');
const db = require('../config/db');

const Toolkits = db.define('toolkits', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        required: true
    },
    name:{
        type: sequelize.STRING,
        required: true
    },
    path:{
        type: sequelize.STRING,
        required: true
    },
    is_deleted: {
        type: sequelize.STRING,
        required: true
    }
})

module.exports = Toolkits;