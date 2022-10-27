"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("mycarts", [
      {
        count: 2,
        created_at: new Date(),
        updated_at: new Date(),
        buyercart_id: 2,
        product_id: 2,
      },
      {
        count: 2,
        created_at: new Date(),
        updated_at: new Date(),
        buyercart_id: 2,
        product_id: 4,
      },
      {
        count: 3,
        created_at: new Date(),
        updated_at: new Date(),
        buyercart_id: 1,
        product_id: 1,
      },
      {
        count: 3,
        created_at: new Date(),
        updated_at: new Date(),
        buyercart_id: 1,
        product_id: 2,
      },
      {
        count: 3,
        created_at: new Date(),
        updated_at: new Date(),
        buyercart_id: 1,
        product_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("mycarts", null, {});
  },
};
