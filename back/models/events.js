'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    category: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    url_maps: DataTypes.STRING,
    image: DataTypes.STRING,
    create_by: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN
  }, {});
  events.associate = function(models) {
    // associations can be defined here
    events.belongsTo(models.categories, {
      foreignKey: 'category',
      as: 'categories',
      sourceKey: 'id'
    });
    events.belongsTo(models.users, {
      foreignKey: 'create_by',
      as: 'createBy',
      sourceKey: 'id'
    });
  };
  return events;
};