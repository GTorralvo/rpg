const guerreiro = {
nome: "Thorin",
vida: 60,
ataque: 20,
causaDano: function(personagem){
personagem.recebeDano(this.ataque)
}
}

const mago = {
nome: "Gandalfe",
vida: 60,
ataque: 35,
recebeDano: function(quantidade){
this.vida = this.vida - quantidade
}
}

const arqueiro = {
nome: "Legolas",
vida: 80,
ataque: 25
}

guerreiro.causaDano(mago)
console.log(mago.vida)