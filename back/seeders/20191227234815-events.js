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
    return queryInterface.bulkInsert('events', [
      {
        title: 'HAMMERSONIC Fest',
        category: 2,
        start_time: new(Date),
        end_time: new(Date),
        price: 1800000,
        description: 'THIS IS MOSHING TIME',
        address: 'Jakarta',
        url_maps: 'https://goo.gl/maps/rMyngWaFZQvnvnv47',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS7RzZ7vym0zOVTaDWdjInhAVHqgGJhTx0TyfBxyGn2KAOp2my',
        create_by: 1,
        is_active: 1
      },
      {
        title: 'Rock Am Ring',
        category: 2,
        start_time: new(Date),
        end_time: new(Date),
        price: 5000000,
        description: 'THIS IS MOSHING TIME',
        address: 'Jerman',
        url_maps: 'https://goo.gl/maps/EL7QoH1iiSADcwE27',
        image: 'https://en.concerts-metal.com/images/flyers/201912/1575980728.webp',
        create_by: 1,
        is_active: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('events', null, {});
  }
};
