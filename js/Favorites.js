import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.upDate();

  }

  upDate() {

    this.removeAllTr();
  }


  removeAllTr() {
    //retira as linhas do body
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }

}
