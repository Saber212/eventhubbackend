const { Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User;
};