'use strict';

const { User, sequelize } = require('../models');

module.exports = {
	async up(queryInterface, Sequelize) {
		const tishko = await User.findOne({ where: { username: 'tishko' } });
		const johnDoe = await User.findOne({ where: { username: 'john-doe' } });
		const jannaSarmad = await User.findOne({ where: { username: 'janna' } });

		if (tishko && johnDoe && jannaSarmad) {
			await queryInterface.bulkInsert(
				'Followers',
				[
					{
						followerId: tishko.id,
						userId: johnDoe.id,
					},
					{
						followerId: tishko.id,
						userId: jannaSarmad.id,
					},
				],
				{
					ignoreDuplicates: true, // This will prevent errors on duplicate entries
				}
			);
		}
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Followers', null, {});
	},
};
