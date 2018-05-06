'use strict';
const mockKnex = require('mock-knex');
const tracker = mockKnex.getTracker();

const userService = require('../userService')

describe('Test DAO library with mock-knex', () => {

  tracker.install();

  describe('When calling userService.findAll', () => {
    beforeAll(() => {
      tracker.on('query', (query) => {
        const results = [{
            id: 1,
            firstName: 'Mohammad',
            lastName: 'Zeeshan',
            email: 'zeeshan@mail.com',
            esp: false
          },
          {
            id: 2,
            firstName: 'Ratan',
            lastName: 'Kulshreshtha',
            email: 'ratan@mail.com',
            esp: true
          },
          {
            id: 3,
            firstName: 'Mohammad',
            lastName: 'Amaan',
            email: 'amaan@mail.com'
          }
        ];
        query.response(results);
      });
    });

    test('should return 3 users', () => {
      return userService.findAll()
        .then((res) => {
          const users = res.toJSON();
          expect(users).toHaveProperty('length', 3);
          expect(users[0]).toHaveProperty('esp', false);
          expect(users[1]).toHaveProperty('firstName', 'Ratan');
          expect(users[2]).toHaveProperty('lastName', 'Amaan');
        });
    });
  });
});
