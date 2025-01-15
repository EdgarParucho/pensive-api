'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notes', [
      {
        id: '9fac9d25-40cd-4741-9c0b-0eef8c8f0dab',
        author: 'auth0|1234567890',
        date: '2025-01-14',
        title: 'Seeds',
        body: 'Seed files are some change in data that can be used to populate database tables with sample or test data.',
        type: 'definition',
        keywords: 'seed, seeds, seeding, database',
        reference: 'Sequelize. (2025). Migrations. https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed',
      },
      {
        id: 'c9538c9f-7e7c-4dc9-b353-e78cdeaf00d5',
        author: 'auth0|1234567890',
        date: '2025-01-15',
        title: 'Migrations',
        body: 'Just like you use version control systems such as Git to manage changes in your source code, you can use migrations to keep track of changes to the database. With migrations you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.',
        type: 'definition',
        keywords: 'migration, migrations, database',
        reference: 'Sequelize. (2025). Migrations. https://sequelize.org/docs/v6/other-topics/migrations',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notes', { author: 'auth0|1234567890' }, {});
  }
};
