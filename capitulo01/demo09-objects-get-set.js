const pessoa = {
    _nome: '',
   _idade: 18,
    get nome() {
        return this._nome;
    }, 
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade >= 18
    },
    set idade(valor) {
        this._idade = valor
}
}
pessoa.nome = 'wilker'
console.log(pessoa.nome) // WILKER
pessoa.idade = 16
console.log(pessoa.podeDirigir) // false
console.log(pessoa._idade) // 16