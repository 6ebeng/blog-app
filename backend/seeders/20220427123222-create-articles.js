'use strict';

const { User } = require('../models');

module.exports = {
	async up(queryInterface, Sequelize) {
		const users = await User.findAll();
		const tishko = await User.findOne({ where: { username: 'tishko' } });

		const articles = [
			{
				slug: '10-tips-for-better-time-management',
				title: '10 Tips for Better Time Management',
				description: 'Learn how to manage your time more effectively and increase your productivity.',
				body: 'Time management is a critical skill for success in any field. This article provides 10 practical tips to help you take control of your schedule, reduce stress, and achieve your goals. From setting clear priorities to using the right tools, these strategies will empower you to make the most of your time.',
				userId: users[0].id,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				slug: 'the-future-of-artificial-intelligence',
				title: 'The Future of Artificial Intelligence',
				description: 'Exploring the potential impact of AI on society, industry, and our daily lives.',
				body: 'Artificial intelligence is no longer science fiction. It is a transformative technology that is reshaping our world. In this article, we delve into the future of AI, discussing its potential to solve complex problems, drive innovation, and the ethical considerations we must address as we move forward.',
				userId: users[2].id,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				slug: 'a-guide-to-mindful-living',
				title: 'A Guide to Mindful Living',
				description: 'Discover the benefits of mindfulness and how to incorporate it into your daily routine.',
				body: 'In our fast-paced world, mindfulness offers a path to greater peace and well-being. This guide provides a comprehensive introduction to mindful living, with practical exercises and techniques to help you cultivate awareness, reduce stress, and live more fully in the present moment.',
				userId: users[1].id,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				slug: 'the-art-of-minimalist-design',
				title: 'The Art of Minimalist Design',
				description: 'Less is more. Learn the principles of minimalist design and how to apply them to your work.',
				body: 'Minimalist design is about more than just aesthetics; it is a philosophy of clarity and purpose. This article explores the core principles of minimalism, from the use of negative space to the importance of typography, and provides practical advice on how to create clean, elegant, and effective designs.',
				userId: users[3].id,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				slug: 'mastering-the-art-of-negotiation',
				title: 'Mastering the Art of Negotiation',
				description: 'Key strategies for successful negotiation in business and in life.',
				body: 'Negotiation is a fundamental skill in both our personal and professional lives. This article breaks down the art of negotiation into key strategies and tactics. Learn how to prepare effectively, communicate persuasively, and achieve win-win outcomes in any negotiation scenario.',
				userId: users[4].id,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				slug: 'hello-world-from-tishko',
				title: 'Hello World from Tishko!',
				description: 'A warm welcome to my new blog.',
				body: 'This is my very first post on this exciting new platform. I look forward to sharing my thoughts and ideas with you all. Stay tuned for more content!',
				userId: tishko.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		await queryInterface.bulkInsert('Articles', articles, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Articles', null, {});
	},
};
