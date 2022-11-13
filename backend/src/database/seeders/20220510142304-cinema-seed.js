"use strict";
const { CinemaComplex } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    let cgvCinemas = [];
    let bhdCinemas = [];
    let galaxyCinemas = [];
    let lotteCinemas = [];
    let cineStarCinemas = [];
    let megaGsCinemas = [];

    const cgvCinemaComplex = await CinemaComplex.findOne({
      where: {
        name: "CGV",
      },
    });

    if (cgvCinemaComplex) {
      cgvCinemas = [
        {
          name: "CGV Aeon Bình Tân",
          address:
            "Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM",
          phoneNumber: "19008017",
          rating: 5,
          description:
            "CGV Aeon Mall Bình Tân chính thức khai trương và đi vào hoạt động từ ngày 1/7/2016 tại tầng 3, nằm trong khu vực TTTM Aeon Mall Bình Tân, Quận Bình Tân, TP.Hồ Chí Minh với tổng diện tích sàn lên đến 114.000m2. Được trang bị 7 phòng chiếu hiện đại, đặc biệt là phòng chiếu starium laser.",
          cinemaComplexId: cgvCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CGV Satra Củ Chi",
          address:
            "Tầng 3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Xã Trung An, Huyện Củ Chi, TP.HCM",
          phoneNumber: "19000017",
          rating: 4.9,
          description:
            "Lịch chiếu phim & Mua vé CGV Satra Củ Chi- CGV toàn quốc đầy đủ & tiện lợi nhất. Rạp CGV Satra Củ Chi nằm ở Satra Củ Chi, được xây dựng với tiêu chuẩn rạp Hollywood, chuẩn âm thanh Dolby 7.1, màn hình lớn, sắc nét. CGV Satra Củ Chi là rạp chiếu phim đầu tiên của CGV Cinema tại Củ Chi, đem đến những trải nghiệm giải trí tuyệt vời nhất với giá vé hấp dẫn nhất trong tầm tay mà khán giả trước nay phải di chuyển hơn 20 km mới có được.",
          cinemaComplexId: cgvCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CGV Hùng Vương Plaza",
          address: "Tầng 7 | Hùng Vương Plaza 126 Hùng Vương Quận 5 Tp. Hồ Chí Minh",
          phoneNumber: "19002017",
          rating: 4.5,
          description:
            "Hùng Vương Plaza là một trong số ít những trung tâm mua sắm tiện nghi và sang trọng ở Việt Nam gồm 3 tầng mua sắm với các gian hàng cao cấp của Parkson, khu food court, nhà hàng, games video và bowling cùng các tiện ích giải trí khác. CGV Cinemas nằm ở tầng 7, trung tâm mua sắm Hùng Vương",
          cinemaComplexId: cgvCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CGV Hoàng Văn Thụ",
          address:
            "Tầng 1 và 2, Gala Center, số 415, Hoàng Văn Thụ, Phường 2, Quận Tân Bình, Tp. Hồ Chí Minh",
          phoneNumber: "19004595",
          rating: 4.8,
          description:
            "CGV Hoàng Văn Thụ là một trong số ít những trung tâm mua sắm tiện nghi và sang trọng ở Việt Nam gồm 3 tầng mua sắm với các gian hàng cao cấp của Parkson, khu food court, nhà hàng, games video và bowling cùng các tiện ích giải trí khác.",
          cinemaComplexId: cgvCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    const bhdCinemaComplex = await CinemaComplex.findOne({
      where: {
        name: "BHD Star",
      },
    });

    if (bhdCinemaComplex) {
      bhdCinemas = [
        {
          name: "BHD Star Quang Trung",
          address: "Tầng B1&B2, TTTM Vincom, 190 Quang Trung, Q. Gò Vấp, Tp. Hồ Chí Minh",
          phoneNumber: "190021133",
          rating: 4.8,
          description:
            "Rạp chiếu phim BHD Star Quang Trung là một trong những cụm rạp hiện đại và được đầu tư với quy mô lớn nhất của hệ thống rạp chiếu phim BHD Star Cinema – hệ thống rạp chiếu phim có quy mô lớn nhất tại Việt Nam hiện nay. BHD Star Quang Trung tọa lạc tầng B1 và B2 của trung tâm thương mại Vincom, số 190 Quang Trung, Gò Vấp, thành phố Hồ Chí Minh. ",
          cinemaComplexId: bhdCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BHD Star Vincom Lê Văn Việt",
          address:
            "Tầng 4, tòa nhà Vincom Plaza Lê Văn Việt, số 50 Lê Văn Việt, quận 9, thành phố Hồ Chí Minh",
          phoneNumber: "190021133",
          rating: 5,
          description:
            "Rạp chiếu phim BHD Star Vincom Lê Văn Việt đóng đô tại tầng 4, tòa nhà Vincom Plaza Lê Văn Việt, số 50 Lê Văn Việt, quận 9, thành phố Hồ Chí Minh. Đây là một trong số những cụm rạp của hệ thống BHD Star Cinema có quy mô lớn nhất Sài Gòn.",
          cinemaComplexId: bhdCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BHD Star Vincom Lê Văn Việt",
          address: "Tầng B1&B2, TTTM Vincom Quang Trung, TP.HCM",
          phoneNumber: "190021133",
          rating: 4.5,
          description:
            "Xem Lịch chiếu và Mua vé BHD Star Quang Trung- rạp BHD toàn quốc dễ dàng - nhanh chóng tại Moveek. Rạp BHD Quang Trung nằm ở tầng B1&B2, TTTM Vincom Quang Trung, với 8 phòng chiếu phim hiện đại, chất lượng âm thanh tuyệt hảo. BHD Quang Trung tham gia thị trường đông đúc và còn rất nhiều tiềm năng, đem đến cho khán giả khu vực nhiều lựa chọn.",
          cinemaComplexId: bhdCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    const galaxyCinemaComplex = await CinemaComplex.findOne({
      where: {
        name: "Galaxy",
      },
    });

    if (galaxyCinemaComplex) {
      galaxyCinemas = [
        {
          name: "Galaxy Huỳnh Tấn Phát",
          address: "Lầu 3 & 4, TTTM ICON 68, 2 Hải Triều, Q.1, Tp. Hồ Chí Minh",
          phoneNumber: "19034224",
          rating: 4.9,
          description:
            "Xem Lịch chiếu và Mua vé BHD Star Bitexco- rạp BHD toàn quốc dễ dàng - nhanh chóng tại Moveek. Rạp BHD Bitexco nằm ở tầng 3 $ 4 của TTTM ICON68, có 7 phòng chiếu phim 2D và 3D hiện đại. Đặc biệt, BHD Bitexco có phòng chiếu Deluxe, First Class và Onyx với nhiều tiện nghi đẳng cấp.",
          cinemaComplexId: galaxyCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    const lotteCinemaComplex = await CinemaComplex.findOne({
      where: {
        name: "Lotte",
      },
    });

    if (lotteCinemaComplex) {
      lotteCinemas = [
        {
          name: "Lotte Cộng Hòa",
          address: "Tầng 4, Pico Plaza, 20 Cộng Hòa, P.12, Q.Tân Bình, TP.HCM, Việt Nam",
          phoneNumber: "19008393",
          rating: 4.6,
          description:
            "Nằm tọa lạc ngay tại mặt tiền đường Cộng Hòa, quận Tân Bình. Rạp Lotte Cinema Cộng Hòa là một trong những điểm đến thú vị nhất của các bạn trẻ Sài Gòn mỗi dịp cuối tuần và mỗi khi bom tấn mới ra mắt.",
          cinemaComplexId: lotteCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lotte Nowzone",
          address:
            "Tầng 5, TTTM Nowzone, 235 Nguyễn Văn Cừ, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh",
          phoneNumber: "19008393",
          rating: 4.2,
          description:
            "Lịch chiếu phim Lotte Nowzone- rạp Lotte toàn quốc đầy đủ & tiện lợi nhất. Rạp Lotte Nowzone nằm ở TTTM Nowzone, được xây dựng với tiêu chuẩn rạp Hollywood, chuẩn âm thanh Dolby 7.1, màn hình lớn, sắc nét.",
          cinemaComplexId: lotteCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    const cineStarCinemaComplex = await CinemaComplex.findOne({
      where: {
        name: "CineStar",
      },
    });

    if (cineStarCinemaComplex) {
      cineStarCinemas = [
        {
          name: "CineStar Hai Bà Trưng",
          address: "135 Hai Bà Trưng, P. Bến Nghé, Q.1, Tp. Hồ Chí Minh",
          phoneNumber: "198729271",
          rating: 4.8,
          description:
            "Cinestar Hai Bà Trưng là cụm rạp thứ 3 thuộc hệ thống Cinestar nằm ngay vị trí thuận lợi của Quận 1, tọa lạc ở 135 Hai Bà Trưng, phường Bến Nghé, quận 1, TP.Hồ Chí Minh. Cụm rạp Cinestar Hai Bà Trưng sở hữu tổng cộng 6 phòng chiếu tương đương 1100 ghế ngồi.",
          cinemaComplexId: cineStarCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cinestar Quốc Thanh",
          address: "271 Nguyễn Trãi, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh",
          phoneNumber: "198729371",
          rating: 4.8,
          description:
            "Xem lịch chiếu và mua vé Cinestar Quốc Thanh, rạp Cinestar toàn quốc dễ dàng - nhanh chóng tại Moveek. Rạp Cinestar Quốc Thanh nằm ở đường Nguyễn Trãi, được xây dựng với tiêu chuẩn rạp Hollywood, chuẩn âm thanh Dolby 7.1, màn hình lớn, sắc nét. Cinestar Quốc Thanh là rạp chiếu phim đầu tiên thuộc hệ thống Cinestar, được cải tạo từ rạp hát Quốc Thanh cũ.",
          cinemaComplexId: cineStarCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    const megaGsCinemaComplex = await CinemaComplex.findOne({
      where: {
        name: "Mega",
      },
    });

    if (megaGsCinemaComplex) {
      megaGsCinemas = [
        {
          name: "Mega GS Cao Thắng",
          address: "212 Cao Thắng, phường 9, quận 3",
          phoneNumber: "198729012",
          rating: 5,
          description:
            "Rạp chiếu phim Mega GS Cao Thắng là cụm rạp chiếu phim đẳng cấp duy nhất chỉ có 1 rạp tại thành phố Hồ Chí Minh hiện nay. Đi vào hoạt động chính thức từ tháng 8/2015, Mega GS Cao Thắng đã nhanh chóng trở thành địa điểm giải trí lý tưởng của giới trẻ.",
          cinemaComplexId: megaGsCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mega GS Lý Chính Thắng",
          address: "212 Lý Chính Thắng, phường 9, quận 3",
          phoneNumber: "192801821",
          rating: 4.5,
          description:
            "Rạp Mega GS Lý Chính Thắng được xây dựng với tiêu chuẩn rạp Hollywood, chuẩn âm thanh Dolby 7.1, màn hình lớn, sắc nét. Mega GS Lý Chính Thắng là rạp chiếu phim của công ty Sóng Vàng trên toàn quốc.",
          cinemaComplexId: megaGsCinemaComplex.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    await queryInterface.bulkInsert("Cinemas", [
      ...cgvCinemas,
      ...bhdCinemas,
      ...galaxyCinemas,
      ...lotteCinemas,
      ...cineStarCinemas,
      ...megaGsCinemas,
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
//npx sequelize db:seed --seed 20220510142304-cinema-seed
