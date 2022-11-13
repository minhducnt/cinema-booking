"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Showtimes",
      [
        {
          movieId: 4,
          screenId: 4,
          startTime: "2022-06-01 10:00:00",
          endTime: "2022-06-01 12:08:00",
        },
        {
          movieId: 4,
          screenId: 44,
          startTime: "2022-06-05 06:10:00",
          endTime: "2022-06-05 08:48:00",
        },
        {
          movieId: 14,
          screenId: 14,
          startTime: "2022-06-07 12:30:00",
          endTime: "2022-06-07 14:08:00",
        },
        {
          movieId: 24,
          screenId: 24,
          startTime: "2022-05-13 07:45:00",
          endTime: "2022-05-13 09:38:00",
        },
        {
          movieId: 34,
          screenId: 24,
          startTime: "2022-06-01 16:00:00",
          endTime: "2022-06-01 17:31:00",
        },
        {
          movieId: 34,
          screenId: 34,
          startTime: "2022-06-03 14:30:00",
          endTime: "2022-06-03 16:01:00",
        },
        {
          movieId: 44,
          screenId: 54,
          startTime: "2022-06-08 10:00:00",
          endTime: "2022-06-08 12:02:00",
        },
        {
          movieId: 54,
          screenId: 14,
          startTime: "2022-06-16 10:00:00",
          endTime: "2022-06-16 12:10:00",
        },
        {
          movieId: 64,
          screenId: 64,
          startTime: "2022-06-01 10:00:00",
          endTime: "2022-06-01 12:10:00",
        },
        {
          movieId: 84,
          screenId: 74,
          startTime: "2022-05-23 07:00:00",
          endTime: "2022-05-23 09:10:00",
        },
        {
          movieId: 104,
          screenId: 84,
          startTime: "2022-06-02 16:00:00",
          endTime: "2022-06-02 18:17:00",
        },
        {
          movieId: 124,
          screenId: 44,
          startTime: "2022-06-27 00:45:00",
          endTime: "2022-06-02 02:55:00",
        },
        {
          movieId: 144,
          screenId: 94,
          startTime: "2022-07-05 16:00:00",
          endTime: "2022-07-05 18:17:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};
//npx sequelize db:seed --seed 20220627135013-showtime-seed
//npx sequelize-cli db:seed:undo --seed 20220627135013-showtime-seed
