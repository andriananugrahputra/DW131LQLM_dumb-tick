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
    return queryInterface.bulkInsert('users', [
      {
        username: 'andriananugrahputra',
        password: '111',
        fullname: 'Andrian Anugrah Putra',
        phone_number: '081214211103',
        email: 'andriananugrah.putra@gmail.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl9liu0osnohqOz2mE7H-FyFOspWGpKCBuJZoFfg-IY2y8Sfy8',
        status: 'eo',
        is_active: 1
      },
      {
        username: 'putraanugrahandrian',
        password: '222',
        fullname: 'Putra Anugrah Andrian',
        phone_number: '085316392829',
        email: 'putra.anugrahandrian@gmail.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5p3wEDNzYj3kHFfMNx45cAxPWqhfyS0cp0TmXkSMsE3FMBrMi',
        status: 'buy',
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
    return queryInterface.bulkDelete('users', null, {});
  }
};
