// How to label regional variants? Meowth has 2, maybe DexNum-Region in pokemon table?
// calculate odds in the back end, check whether the game is new or old to determine base odds
// How to calculate encounters for SV and LA? open world with multiple spawns at once...
// Add a timer for hunts too, maybe guesstimate number of encounters for SV LA using timer?
// Flawed because different mons have different speeds, maybe just track number of sandwiches for SV
// Maybe track number of pokemon in outbreak on client side? calculate currNum on the backend and send result to DB?

const users = [
    { id: '2947367', name: 'Johnny Gainz', email: 'johnny@gainz.com', password: '123456' },
    { id: '5063468', name: 'Chris Bulwick', email: 'chris@bulwick.com', password: 'password' },
    { id: '1023123', name: 'Steve Frogger', email: 'steve@frogger.com', password: 'shiny' },
    { id: '5637439', name: 'Zagreus Hades', email: 'zagreus@hades.com', password: 'incorrect' },
    { id: '3409048', name: 'Crisanta Agony', email: 'crisanta@agony.com', password: 'Crisanta' },
];

const hunts = [
    { id: '1', user: users[0].id, dexNum: '306', currNum: '302', onGoing: 1, game: "Pokemon Sword", method: 'Masuda', boosts: ['Charm', 'Masuda'] },
    { id: '2', user: users[0].id, dexNum: '552', currNum: '863', onGoing: 1, game: "Pokemon Ultra Sun", method: 'Random Encounter', boosts: ['Charm'] },
    { id: '3', user: users[1].id, dexNum: '104', currNum: '54', onGoing: 0, game: "Pokemon Sun", method: 'SOS', boosts: ['Charm'] },
    { id: '4', user: users[1].id, dexNum: '682', currNum: '302', onGoing: 0, game: "Pokemon Y", method: 'Random Encounter', boosts: [] },
    { id: '5', user: users[1].id, dexNum: '593', currNum: '256', onGoing: 1, game: "Pokemon Black 2", method: 'Masuda', boosts: ['Charm', 'Masuda'] },
    { id: '6', user: users[2].id, dexNum: '996', currNum: '302', onGoing: 1, game: "Pokemon Violet", method: 'Random Encounter', boosts: ['Charm', 'Sandwich'] },
    { id: '7', user: users[2].id, dexNum: '52', currNum: '0', onGoing: 0, game: "Pokemon Shield", method: 'Masuda', boosts: ['Charm', 'Masuda'] },
    { id: '8', user: users[3].id, dexNum: '821', currNum: '1', onGoing: 1, game: "Pokemon Shield", method: 'Masuda', boosts: ['Charm', 'Masuda'] },
    { id: '9', user: users[4].id, dexNum: '701', currNum: '302', onGoing: 1, game: "Pokemon Sword", method: 'Masuda', boosts: ['Charm', 'Masuda'] },
    { id: '10', user: users[4].id, dexNum: '571', currNum: '473', onGoing: 0, game: "Pokemon Scarlet", method: 'Masuda', boosts: ['Charm', 'Masuda'] },
];

module.exports = {
    users,
    hunts,
};