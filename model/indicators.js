const sequelize = require('sequelize');
const db = require('../config/db');

const Indicators = db.define('indicator', {
    id: {
        type: sequelize.UUID,
        required: true,
        primaryKey: true
    },
    code:{
        type: sequelize.STRING,
        required: true,
        allowNull: false
    },
    name:{
        type: sequelize.STRING,
        allowNull: false

    },
    target:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    child_boys:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    child_girls:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    adole_boys:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    adole_girls:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    adult_boys:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    adult_girls:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    male:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    female:{
        type: sequelize.BIGINT,
        allowNull: false

    },
    beneficiary_status:{
        type: sequelize.STRING,
        allowNull: true
    },
    total_pwd:{
        type: sequelize.BIGINT,
        allowNull: false
    },
    is_deleted:{
        type: sequelize.BOOLEAN
    },
    p_id:{
        type: sequelize.STRING,
        allowNull: false
    },
    p_code:{
        type: sequelize.STRING,
        allowNull: false
    },
    date:{
        type: sequelize.DATE,
        allowNull: false
    }
})


module.exports = Indicators;
