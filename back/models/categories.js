'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    categories.hasMany(models.events, {
      foreignKey: 'category',
      as: 'events',
      sourceKey: 'id'
    });
  };
  return categories;
};