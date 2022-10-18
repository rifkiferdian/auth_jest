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
     await queryInterface.bulkInsert('Photos', [
       {
         title: 'Monyet',
         caption: 'Monyet',
         image_url:'https://ichef.bbci.co.uk/images/ic/1200x675/p02k8mcv.jpg',
         createdAt: date,
         updatedAt: date
       },
       {
        title: 'Kera',
        caption: 'Kera',
        image_url:'https://ichef.bbci.co.uk/images/ic/1200x675/p02k8mcv.jpg',
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
  }
};
