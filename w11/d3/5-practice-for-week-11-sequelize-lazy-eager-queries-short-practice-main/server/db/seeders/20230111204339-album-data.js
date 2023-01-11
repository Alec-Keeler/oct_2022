'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Albums', [
    {
      name: "Test Album 1!",
      bandId: 1
    },
    {
      name: "Test Album 2!",
      bandId: 2
    },
    {
      name: "Test Album 3!",
      bandId: 3
    },
    {
      name: "Test Album 4!",
      bandId: 4
    },
    {
      name: "Test Album 5!",
      bandId: 5
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
