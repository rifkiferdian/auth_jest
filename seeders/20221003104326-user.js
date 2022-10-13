'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const date = new Date();
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: 'admin',
        createdAt: date,
        updatedAt: date
      },
      {
        username: 'user',
        password: 'user',
        createdAt: date,
        updatedAt: date
      },
      {
        username: 'rifki',
        password: 'rifki',
        createdAt: date,
        updatedAt: date
      },
    
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
