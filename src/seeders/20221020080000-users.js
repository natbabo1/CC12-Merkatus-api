"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        first_name: "admin",
        last_name: "Nat",
        email: "natbabo@gmail.com",
        phone_number: "0812345678",
        address: "the Address",
        password:
          "$2a$12$dPl5fxT2QFUO56NFDBQ0me7kujw5iWcmrS8.9CiNmWUVryhnXFCT.",
        role: "ADMIN",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "Poom",
        last_name: "Pimmy",
        email: "poomy@gmail.com",
        phone_number: "0812345679",
        address: "the Address",
        password:
          "$2a$12$dPl5fxT2QFUO56NFDBQ0me7kujw5iWcmrS8.9CiNmWUVryhnXFCT.",
        role: "USER",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "Bolly",
        last_name: "Billy",
        email: "bolly@gmail.com",
        phone_number: "0812345680",
        address: "the Address",
        password:
          "$2a$12$dPl5fxT2QFUO56NFDBQ0me7kujw5iWcmrS8.9CiNmWUVryhnXFCT.",
        role: "USER",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "Taakky",
        last_name: "Tanny",
        email: "takataan@gmail.com",
        phone_number: "0812345681",
        address: "the Address",
        password:
          "$2a$12$dPl5fxT2QFUO56NFDBQ0me7kujw5iWcmrS8.9CiNmWUVryhnXFCT.",
        role: "USER",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
