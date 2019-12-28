'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    event_id: DataTypes.INTEGER,
    order_by: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};