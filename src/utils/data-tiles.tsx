export type Mon = 'Pikachu' | 'Charizard' | 'Gengar' | 'Lucario' | 'Snorlax' | 'Espeon' | 'Blaziken' | 'Milotic' | 'Gardevoir' | 'Salamence' | 'Metagross' | 'Jolteon' | 'Vaporeon' | 'Sylveon' | 'Infernape' | 'Sceptile' | 'Swampert' | 'Torterra' | 'Empoleon' | 'Luxray' | 'Togekiss' | 'Leafeon' | 'Glaceon' | 'Garchomp' | 'Talonflame' | 'Greninja';
export type Position = {
    row: number
    column: number
}
export type Tile = {
    mon: Mon,
    position: Position
}


export const mons: Mon[] = [
    "Pikachu", "Charizard", "Gengar", "Lucario", "Snorlax", "Espeon", "Blaziken", "Milotic", "Gardevoir", "Salamence", "Metagross", "Jolteon", "Vaporeon", "Sylveon", "Infernape", "Sceptile", "Swampert", "Torterra", "Empoleon", "Luxray", "Togekiss", "Leafeon", "Glaceon", "Garchomp", "Talonflame", "Greninja"]
