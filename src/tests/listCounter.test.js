/**
 * @jest-environment jsdom
 */

import listCounter from '../modules/listCounter.js';

describe('Test Items Counter', () => {
  const link = document.createElement('p');
  const data = [
    {
      name: 'BULBASAUR',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      id: '0',
    },
    {
      name: 'IVYSAUR',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      id: '1',
    },
    {
      name: 'VENUSAUR',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      id: '2',
    },
  ];

  const count = listCounter(data.length, link);

  test('The amount of items = 3', () => {
    expect(count).toBe(3);
  });
});