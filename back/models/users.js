'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.events, {
      foreignKey: 'create_by',
      as: 'events',
      sourceKey: 'id'
    });
  };
  return users;
};