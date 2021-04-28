let valores = [8, 1, 7, 4, 2, 9]

for(let contador = 0; contador < valores.length; contador++){
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}

console.log('------------------------------------------')

//outra forma
for(let contador in valores){
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}

