//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const biciDaCorsa =[
{nome:"Speedster 3000", peso: 7.5 }, //8
{nome:"Lightning Pro", peso: 6.8 },
{nome:"Carbon x", peso: 7.2 },
{ nome:"Aero Racer", peso: 7.9 },
{ nome: "Mountain Climber", peso: 6.5 }
]

let biciPiuleggera = biciDaCorsa[0]


for( let i = 1; i < biciDaCorsa.length; i++ ) {
    
    let elemento = biciDaCorsa[i]
    if( elemento.peso < biciPiuleggera.peso ) {
    
        biciPiuleggera = elemento
    }
}
console.log(biciPiuleggera);

