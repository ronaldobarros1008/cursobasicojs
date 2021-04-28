let num = [5, 8, 9, 3, 4]

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O prmeiro valor do vetor é ${num[0]}`)

num.push(1)//adicionando o numero 1 no final do vetor
console.log(`Adicionando o numero '1' ao final do vertor ${num}`)

console.log(`Colocando o vetor em ordem ${num.sort()}`)

let posicao = num.indexOf(8)
console.log(`O valor 8 está na posição ${posicao}`)

let posicao2 = num.indexOf(15)//quando o valor não existe no vetor ele devolve -1
console.log(`O valor 8 está na posição ${posicao2}`)




