export type Mon = 'Bulbasaur' | 'Charmander' | 'Squirtle' | 'Pikachu' | 'Eevee' |
    'Machop' | 'Abra' | 'Gastly' | 'Dratini' | 'Chikorita' |
    'Cyndaquil' | 'Totodile' | 'Hoothoot' | 'Mareep' | 'Heracross' |
    'Treecko' | 'Torchic' | 'Mudkip' | 'Ralts' | 'Shroomish' |
    'Turtwig' | 'Chimchar' | 'Piplup' | 'Starly' | 'Shinx' | 'Bidoof';

export type Position = {
    row: number
    column: number
}

export type Card = {
    mon: Mon,
    position: Position
}

export let monList: Mon[] = [
    'Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Eevee',
    'Machop', 'Abra', 'Gastly', 'Dratini', 'Chikorita',
    'Cyndaquil', 'Totodile', 'Hoothoot', 'Mareep', 'Heracross',
    'Treecko', 'Torchic', 'Mudkip', 'Ralts', 'Shroomish',
    'Turtwig', 'Chimchar', 'Piplup', 'Starly', 'Shinx', 'Bidoof'
];


export let monUsedTable: Map<Mon, boolean> = new Map([
    ['Bulbasaur', false],
    ['Charmander', false],
    ['Squirtle', false],
    ['Pikachu', false],
    ['Eevee', false],
    ['Machop', false],
    ['Abra', false],
    ['Gastly', false],
    ['Dratini', false],
    ['Chikorita', false],
    ['Cyndaquil', false],
    ['Totodile', false],
    ['Hoothoot', false],
    ['Mareep', false],
    ['Heracross', false],
    ['Treecko', false],
    ['Torchic', false],
    ['Mudkip', false],
    ['Ralts', false],
    ['Shroomish', false],
    ['Turtwig', false],
    ['Chimchar', false],
    ['Piplup', false],
    ['Starly', false],
    ['Shinx', false],
    ['Bidoof', false],
])