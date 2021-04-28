let amigo = {}
console.log(typeof amigo)

amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log(`Engordou ${p} Kg`)
        this.peso += p
    }
}

console.log('==============================')

console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
amigo.engordar(5)//chamado método do objeto 'amigo' e passando paramentro
console.log(`${amigo.nome} pesa agora ${amigo.peso} Kg`)

console.log('==============================')