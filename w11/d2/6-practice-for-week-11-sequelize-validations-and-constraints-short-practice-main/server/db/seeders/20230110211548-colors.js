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
   await queryInterface.bulkInsert('Colors', [
    // {
    //   name: 'red'
    // },
    // {
    //   name: 'blue'
    // },
    // {
    //   name: 'yellow'
    // },
    {
      name: 'orangey'
    },
   ])
    // const { Color } = require('../models')
    // await Color.create({ name: 'orangey' })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors')
  }
};
