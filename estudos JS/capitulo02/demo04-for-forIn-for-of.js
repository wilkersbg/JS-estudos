const par = "número par"
const impar = "número impar"

/*for(let index = 0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? 'numero par' : 'numero impar'
    console.log (`o número ${index} é ${decisao}`)
}*/

const listaDeTarefas = [
    {
        id: parseInt (Math.random() * 10),
        nome: "maria",
        superPoder: "super Força"
    },
    {
        id: parseInt(Math.random() * 10),
        nome: "barry allen",
        superPoder: 'Super velocidade'
    }
]

for (let index = 0; index < listaDeTarefas.length; index++) {
    const item = listaDeTarefas[index]
console.log(`
    id: ${item.id}
    nome: ${item.nome}
    superPoder: ${item.superPoder}
    `)
}

// não precisa de um contador (forIn)

for(const index in listaDeTarefas){
    const item = listaDeTarefas[index];
    console.log("nome", item.nome)
}

//não precisa usar o index

for (const item of listaDeTarefas) {
    console.log('super poder:', item.superPoder)
}