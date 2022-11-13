'use strict';
const { hashPassword } = require('../../services/auth');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					email: 'admin@example.com',
					password: hashPassword('11111111'),
					firstName: 'Admin',
					lastName: 'User',
					role: 'admin',
					phoneNumber: '4416788302',
					dateOfBirth: '1996-12-23',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					email: 'user@example.com',
					password: hashPassword('11111111'),
					firstName: 'Normal',
					lastName: 'User',
					role: 'user',
					dateOfBirth: '2004-04-27',
					phoneNumber: '4464172790',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
//npx sequelize db:seed 20220504172732-user-seed
