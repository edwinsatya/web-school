'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('./teachers.json', 'utf-8'));
    data.map(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })
    return queryInterface.bulkInsert('Teachers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};