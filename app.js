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

        if(this.vida = 0){
            this.vida = "eliminado"
        }
    }  
}

const druida = new Personagem("kode", 80, 25)
const guerreiro = new Personagem("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80,25)

console.log (druida, guerreiro, mago, arqueiro)