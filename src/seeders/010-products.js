"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("products", [
      {
        product_name: "Lipstick1",
        product_detail: "Lorem Lipstick",
        unit_price: 999,
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666260260/Product/Lipstick/30_ylkpmz.png",
        stock: 999,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
        seller_id: 2
      },
      {
        product_name: "Camera1",
        product_detail: "Lorem Cam",
        unit_price: 19999,
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666260239/Product/Lipstick/26_lcemcg.png",
        stock: 29,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 10,
        seller_id: 3
      },
      {
        product_name: "Earing1",
        product_detail: "Lorem is some detail",
        unit_price: 7999,
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666259916/Product/Earing/22_sflrfm.png",
        stock: 999,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 11,
        seller_id: 2
      },
      {
        product_name: "Mac1",
        product_detail: "Lorem is some detail",
        unit_price: 9999,
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666259532/Product/Mac/18_ty2b14.png",
        stock: 999,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 9,
        seller_id: 3
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  }
};
