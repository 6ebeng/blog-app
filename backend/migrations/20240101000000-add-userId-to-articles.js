"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Delete all existing articles (since they don't have authors)
    await queryInterface.sequelize.query('DELETE FROM "Articles"');
    
    // Add the userId column as required
    await queryInterface.addColumn('Articles', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Articles', 'userId');
  }
}; 