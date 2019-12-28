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
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Sport',
        is_active: 1
      },
      {
        name: 'Music',
        is_active: 1
      },
      {
        name: 'Science',
        is_active: 1
      },
      {
        name: 'Programming',
        is_active: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('categories', null, {});
    */
    return queryInterface.bulkDelete('categories', null, {});
  }
};
