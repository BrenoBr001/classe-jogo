class hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)

    }
    atacarTwo(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)

    }

}

let thor = new hero("Thor", "30", "Guerreiro", "Espada")
let doutorEstranho = new hero("Doutor Estranho", "35", "Mago", "Magia")

thor.atacar()
doutorEstranho.atacarTwo()

