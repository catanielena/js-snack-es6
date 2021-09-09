// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

let bicycles = [
    {
        nome: "mountain bike",
        peso: 7
    },
    {
        nome: "bmx",
        peso: 5
    },
    {
        nome: "graziella",
        peso: 11
    },
    {
        nome: "ibrida",
        peso: 6
    }
];

let bikeLightWeight = bicycles[0];
for(let i = 0; i< bicycles.length; i++) {
    if (bicycles[i].peso < bikeLightWeight.peso){
        bikeLightWeight = bicycles[i];
    }
}
console.log(bikeLightWeight);