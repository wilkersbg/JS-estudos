const listaVazia = []
const listaDeTarefas = ['Lavar a louça', 'Limpar a casa', 'Fazer compras']

//console.log (listaDeTarefas [2])
//console.log (listaDeTarefas [0])
//console.log (listaDeTarefas [5])    

//console.log (listaDeTarefas.length) //quantidade de itens da lista

//adicionar item
    listaDeTarefas.push('Sair para compromisso')//adiciona item no final da lista
    listaDeTarefas.unshift('Acordar')//adiciona item no inicio da lista
    listaDeTarefas.splice(2, 0, 'Tomar café da manhã')//adiciona item em uma posição específica da lista

//remover item
    listaDeTarefas.pop()//remove o último item da lista
    listaDeTarefas.shift()//remove o primeiro item da lista
    listaDeTarefas.splice(1, 1)//remove um item específico da lista

    console.log(listaDeTarefas)