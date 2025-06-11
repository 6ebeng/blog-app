'use strict';
const { bcryptHash } = require('../helper/bcrypt');

module.exports = {
	async up(queryInterface, Sequelize) {
		const users = [
			{
				username: 'john-doe',
				email: 'john.doe@example.com',
				password: 'password123',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'janna',
				email: 'janna@example.com',
				password: 'janna',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'tech-guru',
				email: 'tech.guru@example.com',
				password: 'password789',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'design-maven',
				email: 'design.maven@example.com',
				password: 'password101',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'business-brain',
				email: 'business.brain@example.com',
				password: 'password202',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'tishko',
				email: 'tishko@example.com',
				password: 'tishko',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		for (const user of users) {
			user.password = await bcryptHash(user.password);
		}

		await queryInterface.bulkInsert('Users', users, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
