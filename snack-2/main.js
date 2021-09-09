// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// *
// *
// * Getting a random integer between two values, inclusive
// *
const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// *
// *
// *
// team
const team = [
    {
        tName: "teamA",
        tScore: 0,
        tFouls: 0
    },
    {
        tName: "teamB",
        tScore: 0,
        tFouls: 0
    },
    {
        tName: "teamC",
        tScore: 0,
        tFouls: 0
    },
    {
        tName: "teamD",
        tScore: 0,
        tFouls: 0
    },
    {
        tName: "teamE",
        tScore: 0,
        tFouls: 0
    }
];
let tNameFouls = [];
for(let i = 0; i < team.length; i++) {
    team[i].tScore = getRandomIntInclusive(1, 100);
    team[i].tFouls = getRandomIntInclusive(1, 100);
    let {tName, tFouls} = team[i];
    tNameFouls.push(tName, tFouls);
}
console.log(team);
console.log(tNameFouls);