//Desafio de Projeto Final: Escrevendo as Classes de um Jogo. 

class herois{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi, tipoArma){
        this.nome = nomeHeroi
        this.idade = idadeHeroi
        this.tipo = tipoHeroi
        this.arma = tipoArma
    }
        atacar(){
            console.log(`O Campeão '${this.nome}' de ${this.idade} é o melhor ${this.tipo} de Summoner's Rift e fez seu ataque na arena usando ${this.arma} e derrotou todos os seus inimigos!`)
        }
}

let newHero = new herois("Graves", "27 anos", "Atirador", "Escopeta dupla")
newHero = new herois("Ryze", "Idade indefinida", "Mago", "Cajado Runico")
newHero = new herois("Lee Sin", "32 anos", "Monge Lutador", "Artes Marciais")
newHero = new herois("Zed", "28 anos", "Ninja das sombras", "Shurikens sombrias")

newHero.atacar()
// Desafio concluído :)