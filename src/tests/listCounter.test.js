/**
 * @jest-environment jsdom
 */

import listCounter from '../modules/listCounter.js';

describe('Test Items Counter', () => {
  const p = document.createElement('p');
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

  const counter = listCounter(data.length, p);

  test('The amount of items = 3', () => { expect(counter).toBe(3); });
});