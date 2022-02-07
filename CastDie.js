// Kast terning DONE
// Terningstørrelse DONE
// Antall terninger
// Modifiser resultat (bonuser)

const dieSize = [4, 6, 8, 10, 12, 20, 100];

// function castDie(sides){
//     return Math.ceil(Math.random() * sideCount(sides));
// }
const castDie = sides => {
    return Math.ceil(Math.random() * sideCount(sides));
}

// Add desired dieSize to console for testing
console.log(castDie());

function sideCount(sides){
    for(let i = 0; i < dieSize.length; i++){
        if(sides == dieSize[i]){
            return dieSize[i];
        }
    }
    return null;
}