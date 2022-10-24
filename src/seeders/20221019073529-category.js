"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert("categories", [
      {
        category_name: "เสื้อผ้าชาย",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/1_yqidwe.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "เสื้อผ้าหญิง",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/2_inqftc.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "มือถือและอุปกรณ์",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/3_vecnmc.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "เสริมความงามและของใช้ส่วนตัว",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/5_annlkm.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "อาหารเสริมและผลิตภัณฑ์สุขภาพ",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/6_xm33sj.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "ของเล่นและสินค้าแม่และเด็ก",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/4_ircw3t.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "นาฬิกาและแว่นตา",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174436/Category/7_tjv8va.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "เครื่องใช้ภายในบ้าน",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174435/Category/8_nit9l3.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "คอมพิวเตอร์และแลปทอป",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174436/Category/9_ozfhrs.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "กล้องถ่ายภาพและอุปกรณ์เสริม",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666174436/Category/10_dedsct.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "เครื่องประดับ",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666258917/Category/12_qd6jus.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "กีฬาและกิจกรรมกลางแจ้ง",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666258916/Category/13_axrdb6.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "เครื่องใช้ไฟฟ้า",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666258916/Category/14_zmy4ie.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "สัตว์เลี้ยง",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666258916/Category/15_sidhym.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "ยานยนต์",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666258916/Category/17_pftd9s.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: "เครื่องเขียนและดนตรี",
        image:
          "https://res.cloudinary.com/dkbiwdyij/image/upload/v1666258916/Category/16_pizqpq.png",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("categories", null, {});
  }
};
