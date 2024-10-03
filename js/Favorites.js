export class Favorites {
  //o root é a #app
  constructor(root) {
    //colocando a #app e colocando dentro do this.root
    this.root = document.querySelector(root);
  }
}

export class FavoritesView extends Favorites {
  //a leitura sai do main.js e vem para cá - o rott = #app
  constructor(root) {
    //super - passa o root para dentro, linha que liga as duas classes
    super(root);
    console.log(root)
  }
}
