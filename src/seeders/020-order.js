"use strict";

const { PAID, TRANSFER, ARRIVED, RECEIVED } = require("../config/constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("orders", [
      {
        status: PAID,
        date: new Date(),
        amount: 3,
        total_price: 2997,
        buyer_id: 3,
        product_id: 1,
        pay_in_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: TRANSFER,
        date: new Date(),
        amount: 1,
        total_price: 7999,
        buyer_id: 3,
        product_id: 3,
        pay_in_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: ARRIVED,
        date: new Date(),
        amount: 1,
        total_price: 7999,
        buyer_id: 4,
        product_id: 3,
        pay_in_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: RECEIVED,
        date: new Date(),
        amount: 1,
        total_price: 999,
        buyer_id: 4,
        product_id: 1,
        pay_in_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: PAID,
        date: new Date(),
        amount: 2,
        total_price: 39_998,
        buyer_id: 2,
        product_id: 2,
        pay_in_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        status: TRANSFER,
        date: new Date(),
        amount: 1,
        total_price: 9999,
        buyer_id: 2,
        product_id: 4,
        pay_in_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("orders", null, {});
  }
};
