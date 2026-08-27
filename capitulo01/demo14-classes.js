/*class Heroi {
    atacou() {
        console.log("Atacou!!!");
    }
    defendeu() {
        console.log("Defendeu!!!");
    }
}
const heroi = new Heroi();
heroi.atacou();
heroi.defendeu();*/

//usando construtor

class Heroi {
    constructor(nome, poder) {
        this.nome = nome;
        this.poder = poder;
        console.log(`O herói ${this.nome} tem o poder de ${this.poder}`);
    }
}
const heroi = new Heroi("Flash", "Super Velocidade");
