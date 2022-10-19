'use strict';

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

    return queryInterface.bulkInsert('categories', [
      {
        category_name: 'เสื้อผ้าชาย',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'เสื้อผ้าหญิง',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'มือถือและอุปกรณ์',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'เสริมความงามและของใช้ส่วนตัว',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'อาหารเสริมและผลิตภัณฑ์สุขภาพ',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'ของเล่นและสินค้าแม่และเด็ก',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'นาฬิกาและแว่นตา',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'เครื่องใช้ภายในบ้าน',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'คอมพิวเตอร์และแลปทอป',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'กล้องถ่ายภาพและอุปกรณ์เสริม',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'เครื่องประดับ',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'กีฬาและกิจกรรมกลางแจ้ง',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'เครื่องใช้ไฟฟ้า',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'สัตว์เลี้ยง',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'ยานยนต์',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'เครื่องเขียนและดนตรี',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('categories', null, {});
  },
};
