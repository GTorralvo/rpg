class Personagem{
    constructor(nome, vida, ataque,defesa){
        this.nome = nome,
        this.vida = vida,
        this.vidaMaxima = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

    curar(quantidade){
        this.vida = this.vida + quantidade
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade){
        let dano = quantidade - this.defesa

        if(quantidade < this.defesa){
            dano = 0
        }

        this.vida = this.vida - dano

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

const druida = new Personagem("kode", 80, 25, 8)
const guerreiro = new Personagem("Thorin", 60, 20, 15)
const mago = new Personagem("Gandalfe", 60, 35, 5)
const arqueiro = new Personagem("Legolas", 80, 25, 12)
const tanque = new Personagem("Reinhardt", 90, 15, 3)
const necromante = new Personagem("Mortis", 70, 20, 9)
const assassino = new Personagem("Zephyr", 50, 30, 10)

druida.causaDano(mago)

console.log (mago.mostrarStatus())