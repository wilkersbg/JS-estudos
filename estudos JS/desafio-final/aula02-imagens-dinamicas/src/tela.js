class tela {
    static obterrHTML(item) {
        return `
        <div class="row">
    <div class="col-md-3">
      <div class="card" style="width: 50%">
        <img src="${item.img}" nome="${item.nome}" class="card-img-top" alt="...">
      </div>
      <br />
    </div>
    `
    }
}