class Personagem{
    constructor(nome, vida, ataque){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade){
        this.vida = this.vida - quantidade

        if(this.vida <= 0){
            this.vida = "eliminado"
        }
    }
    estaVivo(){
        return this.vida > 0
    }

    mostrarStatus(){
        console.log(this.nome + " | Vida: " + this.vida)
    }
}

const druida = new Personagem("kode", 80, 25)
const guerreiro = new Personagem("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80, 25)
const tanque = new Personagem("Reinhardt", 90, 15)
const necromante = new Personagem("Mortis", 70, 20)
const assassino = new Personagem("Zephyr", 50, 30)

console.log (mago.mostrarStatus())