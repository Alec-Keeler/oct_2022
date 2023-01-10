'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Colors', {
      id: {
        type: Sequelize.INTEGER, //id INTEGER PRIMARY KEY AUTOINCREMENT
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING(50) //name VARCHAR(50)
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Colors')
  }
};
