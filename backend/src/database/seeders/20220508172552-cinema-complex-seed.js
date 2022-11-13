"use strict";
require("dotenv").config();
module.exports = {
  async up(queryInterface, Sequelize) {
    let baseUrl = "";
    if (process.env.NODE_ENV === "development") {
      baseUrl = "";
    } else {
      baseUrl = process.env.BASE_URL + "/";
    }

    await queryInterface.bulkInsert(
      "CinemaComplexes",
      [
        {
          name: "CGV",
          logo: `https://res.cloudinary.com/lamhoang1256/image/upload/v1656150203/omtbs/cgv_xvrvaz.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BHD Star",
          logo: `https://res.cloudinary.com/lamhoang1256/image/upload/v1656150203/omtbs/bhd-cineplex_xrn9ri.png`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Galaxy",
          logo: `https://res.cloudinary.com/lamhoang1256/image/upload/v1656150203/omtbs/galaxy-cinema_eu0qdf.png`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lotte",
          logo: `https://res.cloudinary.com/lamhoang1256/image/upload/v1656150203/omtbs/lotte-cinema_iwhk0r.png`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CineStar",
          logo: `https://res.cloudinary.com/lamhoang1256/image/upload/v1656150203/omtbs/cine-star_sgwca3.png`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mega",
          logo: `https://res.cloudinary.com/lamhoang1256/image/upload/v1656150203/omtbs/mega-gs_pz1jlu.png`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CinemaComplexes", {}, {});
  },
};
//npx sequelize db:seed --seed 20220508172552-cinema-complex-seed
