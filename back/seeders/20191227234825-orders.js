'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('orders', [
      {
        event_id: 1,
        order_by: 2,
        quantity: 1,
        status: 'null',
        attachment: 'null'
      },
      {
        event_id: 2,
        order_by: 2,
        quantity: 1,
        status: 'null',
        attachment: 'null'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('orders', null, {});
    */
    return queryInterface.bulkDelete('orders', null, {});
  }
};
