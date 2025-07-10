'use strict';

require('dotenv').config();
const demoUser = process.env.DEMO_USER;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notes', [
      {
        id: '9fac9d25-40cd-4741-9c0b-0eef8c8f0dab',
        author: demoUser,
        date: '2025-01-14',
        body: 'Seed files are some change in data that can be used to populate database tables with sample or test data.',
        keywords: 'seed, seeds, seeding, database',
        reference: '{ type: "website", authors: [{ firstName: "Sequelize", lastName: "", fullName: "Sequelize" }], year: 2025, title: "Seeds", website: "Seeds - Sequelize", url: "https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed" }',
      },
      {
        id: 'c9538c9f-7e7c-4dc9-b353-e78cdeaf00d5',
        author: demoUser,
        date: '2025-01-15',
        body: 'Just like you use version control systems such as Git to manage changes in your source code, you can use migrations to keep track of changes to the database. With migrations you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.',
        keywords: 'migration, migrations, database',
        reference: '{ type: "website", authors: [{ firstName: "Sequelize", lastName: "", fullName: "Sequelize" }], year: 2025, title: "Migrations", website: "Migrations - Sequelize", url: "https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed" }',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', { author: demoUser }, {});
  }
};
