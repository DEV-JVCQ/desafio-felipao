function rankeadas(vitorias, derrotas){//Define a função rankeadas, que recebe dois parâmetros: vitorias e derrotas.
    let resultado;// Declara uma variável resultado que será usada para armazenar o nível do jogador com base no número de vitórias.
    let saldo = vitorias - derrotas;//Calcula o saldo de vitórias subtraindo o número de derrotas do número de vitórias. O saldo é armazenado na variável saldo.
    
    
    function Nome(){//Declara uma função aninhada chamada Nome que não recebe parâmetros.
      let nome = ("Carla");//Declara uma variável nome e atribui a string "Carla" a ela.
      return nome//Retorna o valor "Carla" quando a função Nome() for chamada.
    }

    //Aqui é feita uma série de verificações para determinar o nível do jogador com base no número de vitórias:
    if(vitorias <= 10){
        resultado = "ferro";
    }else if(vitorias > 10 && vitorias <=20){
        resultado = "bronze";
    }else if(vitorias > 20 && vitorias <=50){
        resultado = "prata";
    }else if(vitorias > 50 && vitorias <=80){
        resultado = "ouro";
    }else if(vitorias > 80 && vitorias <=90){
        resultado = "diamante";
    }else if(vitorias > 90 && vitorias <=100){
        resultado = "lendário";
    }else if(vitorias >=101){
        resultado = "imortal";
    }
    console.log("O Herói " + nome + " tem um saldo de " + saldo + " está no nível de " + resultado);//Imprime no console uma mensagem, mas aqui o nome do jogador usado na mensagem vem da variável global nome, que foi definida fora da função.
    return ("A Heroína " + Nome() + " tem um saldo de " + saldo + " está no nível de " + resultado);//Retorna uma string que será usada pelo chamador da função. A função Nome() é chamada aqui, retornando "Carla"
    
}
 
let vitorias = 1000;//Define uma variável global vitorias com o valor 1000, que será usada como argumento para a função rankeadas().
let derrotas = 8;//Define uma variável global derrotas com o valor 8, também usada como argumento para a função.
let nome = "João";//Define uma variável global nome com o valor "João" que é usada no console.log dentro da função.

let res = rankeadas(vitorias, derrotas)//Chama a função rankeadas() com os valores 1000 (vitórias) e 8 (derrotas), e o retorno da função é armazenado na variável res.
console.log(res)//Imprime no console o valor da variável res, que será a string retornada pela função