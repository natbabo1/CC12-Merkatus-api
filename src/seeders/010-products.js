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
      },
      {
        product_name: "เสื้อผ้าผู้หญิง",
        product_detail:
          "ผ้านุ่ม ใส่สบาย ขนาด : เสื้อยาว65cm รอบ อก 104cm แขนยาว 24cm ไหล่กว้าง49cm",
        unit_price: 299,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667203766/Merkatus/5_fdegp9.jpg",
        stock: 18,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        seller_id: 4
      },
      {
        product_name: "เสื้อผ้าผู้ชาย",
        product_detail:
          "ผ้านิ่มนุ่ม เบา ใส่สบาย ระบายความร้อนได้ยอดเยี่ยม ซักง่าย แห้งเร็ว",
        unit_price: 199,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667203972/Merkatus/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A21_mnw9wa.jpg",
        stock: 21,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        seller_id: 4
      },
      {
        product_name: "Redmi9A",
        product_detail:
          "เรดหมี่ จอ 6.53 นิ้ว Ram2+Rom32GB กล้อง13 ล้านพิกเซล แบตเตอรี่ Li-Pol 5,000 mAh",
        unit_price: 2895,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667204217/Merkatus/tp1_urws4h.jpg",
        stock: 7,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        seller_id: 3
      },
      {
        product_name: "ตุ๊กตาหมี",
        product_detail:
          "ตุ๊กตาหมีน่ารักๆ ตุ๊กตาหมีชุดเครื่องแบบ ตุ๊กตาหมีตกแต่งห้อง",
        unit_price: 389,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667204506/Merkatus/bd1_iku9ss.jpg",
        stock: 8,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 6,
        seller_id: 3
      },
      {
        product_name: "โลชั่นน้ำหอม",
        product_detail: "เพิ่มความสบายให้แก่ผิว",
        unit_price: 119,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667204754/Merkatus/lotion1_jukd3c.jpg",
        stock: 22,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
        seller_id: 4
      },
      {
        product_name: "วิสทร้าซิงค์",
        product_detail: " โคลีน ซิงคื อะมิโน แอคซิค คีเลต 20% 66.67 มก.",
        unit_price: 172,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667205155/Merkatus/zinc1_tzauta.png",
        stock: 87,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 5,
        seller_id: 2
      },
      {
        product_name: "นาฬิกาข้อมือผู้ชาย",
        product_detail: "ตัวล็อคพับสามทบ สายสเตนเลสสตีล กระจกมิเนอรัล",
        unit_price: 929,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667205260/Merkatus/watch1_aavtpu.jpg",
        stock: 22,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 7,
        seller_id: 2
      },
      {
        product_name: "โซฟา",
        product_detail:
          "โซฟาแบบหนังไหม ปรับกางดึงออกเป็นที่นอนได้ มีที่วางแก้วน้ำ ทั้ง 2 ข้างซ้ายขวา",
        unit_price: 12399,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667205471/Merkatus/sofa1_su78s2.jpg",
        stock: 1,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 12,
        seller_id: 4
      },
      {
        product_name: "DesktopPC",
        product_detail:
          "AMD RYZEN 5 5600G Hexa-core processor 8GB DDR4/SSD 256GB/HDD 1TB ",
        unit_price: 24599,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667205572/Merkatus/pc1_hsknfu.jpg",
        stock: 1,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 9,
        seller_id: 3
      },
      {
        product_name: "กล้องถ่ายรูปFujifilm",
        product_detail:
          "เซนเซอร์ APS-C 24.1 ล้านพิกเซล จอ LCD 3 นิ้ว ความละเอียด 1,040,000 จุด",
        unit_price: 3239,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667205858/Merkatus/camera1_lwfvfr.png",
        stock: 2,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 10,
        seller_id: 2
      },
      {
        product_name: "สร้อยคอต่างหูแฟชั่น",
        product_detail:
          "สร้อยคอต่างหูแฟชั่นเครื่องประดับผู้หญิง ประดับคริสตัลนำเข้าจากประเทศออสเตรีย Aurore Boreale",
        unit_price: 3600,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667207830/Merkatus/as1_xiurgp.jpg",
        stock: 4,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 11,
        seller_id: 3
      },
      {
        product_name: "ฟุตบอลToyStoryAlien",
        product_detail:
          "ฟุตบอลเบอร์ 2 ลาย Toy Story Alien สีเขียว ไซน์ ขนาดเส้นผ่าศูนย์กลาง 16 ซม.",
        unit_price: 296,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667208179/Merkatus/ball1_i4uji9.jpg",
        stock: 4,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 12,
        seller_id: 4
      },
      {
        product_name: "เครื่องดูดฝุ่น",
        product_detail:
          "เครื่องดูดฝุ่นแบบมีสาย 11000pa แรงดูดสูง เหมาะสำหรับอพาร์ทเมนท์ขนาดเล็ก ใช้ได้ด้วยมือเดียว",
        unit_price: 578,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667208813/Merkatus/vac1_qo0rdx.jpg",
        stock: 8,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 13,
        seller_id: 2
      },
      {
        product_name: "ที่นอนสัตว์เลี้ยงทรงเปลือกหอย",
        product_detail:
          "วัสดุพื้นผิวเป็น BB fleece ซึ่งถักทอแน่น ทนทาน และไม่ติดขนง่าย",
        unit_price: 666,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667209030/Merkatus/pet1_byli7u.png",
        stock: 22,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 14,
        seller_id: 2
      },
      {
        product_name: "ยางรถยนต์มิชลิน",
        product_detail:
          " สมรรถนะการเบรกบนพื้นถนนเปียกที่สั้น ทั้งในยางใหม่และใกล้หมดดอก ยางใหม่เบรกสั้นกว่าค่าเฉลี่ยยางชั้นนำ 5%",
        unit_price: 3333,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667209365/Merkatus/mi1_oaajnv.png",
        stock: 3,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 15,
        seller_id: 3
      },
      {
        product_name: "กีตาร์โปร่ง",
        product_detail:
          "ขนาด 41 นิ้ว, 20 เฟร็ต, ทรง Dreadnought คอเว้า นวัตกรรมเทคโนโลยี Transaoustic Guitar",
        unit_price: 3129,
        image:
          "https://res.cloudinary.com/dkcoxqdbo/image/upload/v1667209604/Merkatus/gui1_rqokmd.jpg",
        stock: 3,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 16,
        seller_id: 3
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  }
};
