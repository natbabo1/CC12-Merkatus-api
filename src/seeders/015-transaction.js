"use strict";

const { COMPLETED } = require("../config/constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("transactions", [
      {
        status: COMPLETED,
        sender_id: 3,
        receiver_id: 1,
        amount: 10_996,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: COMPLETED,
        sender_id: 4,
        receiver_id: 1,
        amount: 8_998,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: COMPLETED,
        sender_id: 2,
        receiver_id: 1,
        amount: 49_997,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
