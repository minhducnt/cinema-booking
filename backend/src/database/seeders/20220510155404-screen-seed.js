'use strict';
const { getCinemas } = require('../../services/cinemas');

module.exports = {
	async up(queryInterface, Sequelize) {
		const cinemas = await getCinemas();
		const screens = [];
		let accumulation = 0;
		cinemas.forEach((cinema) => {
			for (let i = 1; i <= 2; i++) {
				accumulation++;
				screens.push({
					name: `Rạp ${accumulation}`,
					cinemaId: cinema.id,
					createdAt: new Date(),
					updatedAt: new Date(),
				});
			}
		});

		await queryInterface.bulkInsert('Screens', screens);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Screens', null, {});
	},
};
//npx sequelize db:seed 20220510155404-screen-seed
