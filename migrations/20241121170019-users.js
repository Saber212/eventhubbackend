module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false
          },
          username: {
              type: Sequelize.STRING,
              allowNull: false
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          lastname: {
              type: Sequelize.STRING,
              allowNull: false
          },
          email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
          },
          passwordHash: {
              type: Sequelize.STRING,
              allowNull: false
          },
          createdAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          updatedAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.NOW
          }
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
  }
};