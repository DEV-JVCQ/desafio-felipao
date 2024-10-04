let nome = prompt("Digite um nome:");
let xp = prompt("Digite um valor:");

console.log("Seja Bem-Vindo(a)")

if(xp < 1000){
    console.log("O Héroi de nome " + nome + " está no nível de FERRO (Seu XP atual é " + xp +")")
}else if(xp >= 1001 &&  xp <= 2000){
    console.log("O Héroi de nome " + nome + " está no nível de BRONZE (Seu XP atual é " + xp +")")
}else if(xp >= 2001 &&  xp <= 5000){
    console.log("O Héroi de nome " + nome + " está no nível de PRATA (Seu XP atual é " + xp +")")
}else if(xp >= 5001 &&  xp <= 7000){
    console.log("O Héroi de nome " + nome + " está no nível de OURO (Seu XP atual é " + xp +")")
}else if(xp >= 7001 &&  xp <= 8000){
    console.log("O Héroi de nome " + nome + " está no nível de PLATINA (Seu XP atual é " + xp +")")
}else if(xp >= 8001 &&  xp <= 9000){
    console.log("O Héroi de nome " + nome + " está no nível de ASCENDENTE (Seu XP atual é " + xp +")")
}else if(xp >= 9001 &&  xp <= 10000){
    console.log("O Héroi de nome " + nome + " está no nível de IMORTAL (Seu XP atual é " + xp +")")
}else{
    console.log("O Héroi de nome " + nome + " está no nível de RADIANTE (Seu XP atual é " + xp +")")
}