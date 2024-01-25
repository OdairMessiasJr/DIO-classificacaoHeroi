const nomeHeroi = "Galactus";
const xp = 10001;

if(xp <= 1000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Ferro`);
}else if(xp >= 1001 && xp <= 2000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Bronze`);
}else if(xp >= 2001 && xp <=5000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Prata`);
}else if(xp >= 5001 && xp <= 6000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Ouro`);
}else if(xp >=6001 && xp <= 7000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Platina`);
}else if(xp >= 7001 && xp <= 8000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Ascendente`);
}else if(xp >= 8001 && xp <= 10000){
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Imortal`);
}else{
    console.log(`O heroi de nome ${nomeHeroi} esta no nivel de Radiante`);
}

