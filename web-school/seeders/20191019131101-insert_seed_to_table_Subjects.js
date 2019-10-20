'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('./subjects.json', 'utf-8'));
    data.map(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })
    return queryInterface.bulkInsert('Subjects', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};