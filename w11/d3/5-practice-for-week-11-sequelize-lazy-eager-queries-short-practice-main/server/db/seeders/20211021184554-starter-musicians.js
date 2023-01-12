'use strict';

const { Band } = require('../models');
const { Op } = require('sequelize');

const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' }
    ]
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' }
    ]
  },
  {
    name: 'Loved Autumn',
    musicians: [
      { firstName: 'Aurora', lastName: 'Hase' }
    ]
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' }
    ]
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' }
    ]
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // for(let bandIdx = 0; bandIdx < bandMusicians.length; bandIdx++){
    //   const { name, musicians } = bandMusicians[bandIdx];
    //   const band = await Band.findOne({ where: { name } });
    //   for(let musicianIdx = 0; musicianIdx < musicians.length; musicianIdx++) {
    //     const musician = musicians[musicianIdx];
    //     await band.createMusician(musician);
    //   }
    // }
    await queryInterface.bulkInsert('Musicians', [
      {
        groupId: 1,
        firstName: 'Adam',
        lastName: 'Appleby'
      },
      {
        groupId: 1,
        firstName: 'Anton',
        lastName: 'Martinovic'
      },
      {
        groupId: 1,
        firstName: 'Wilson',
        lastName: 'Holt'
      },
      {
        groupId: 2,
        firstName: 'Marine',
        lastName: 'Sweet'
      },
      {
        groupId: 2,
        firstName: 'Georgette',
        lastName: 'Kubo'
      },
      {
        groupId: 3,
        firstName: 'Aurora',
        lastName: 'Hase'
      },
      {
        groupId: 4,
        firstName: 'Trenton',
        lastName: 'Lesley'
      },
      {
        groupId: 4,
        firstName: 'Camila',
        lastName: 'Nenci'
      },
      {
        groupId: 5,
        firstName: 'Rosemarie',
        lastName: 'Affini'
      },
      {
        groupId: 5,
        firstName: 'Victoria',
        lastName: 'Cremonesi'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    const musiciansList = bandMusicians.reduce(
      (acc, band) => [...acc, ...band.musicians], 
      []
    );
    
    await queryInterface.bulkDelete('Musicians', {
      [Op.or]: musiciansList
    });
  }
};
