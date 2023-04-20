/**
 * @jest-environment jsdom
 */
import ReservationsCounter from '../modules/reservationsCounter.js';

describe('Test Reservations Counter', () => {
  const li = document.createElement('li');
  const data = [
    {
      date_start: '2023-04-18',
      date_end: '2023-05-21',
      username: 'Nabeel1',
    },
    {
      date_start: '2023-04-18',
      date_end: '2023-05-21',
      username: 'Nabeel2',
    },
    {
      date_start: '2023-03-27',
      date_end: '2023-04-07',
      username: 'Nabeel3',
    },
    {
      date_start: '2023-04-18',
      date_end: '2023-04-26',
      username: '4',
    },
  ];

  const counter = ReservationsCounter(data.length, li);

  test('The number of reservations are 4', () => {
    expect(counter).toBe(4);
  });
});