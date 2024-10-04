import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);

    this.load();

    GithubUser.seach("brunooliveira7").then((user) => console.log(user));
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

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?");
        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td class="user">
              <img
                src="https://github.com/brunooliveira7.png"
                alt="Imagem de brunooliveira7"
              />
              <a href="https://github.com/brunooliveira7" target="_blank">
                <p>Bruno Oliveira</p>
                <span>brunooliveira7</span>
              </a>
            </td>
            <td class="repositories">76</td>
            <td class="followers">9589</td>
            <td>
              <button class="remove">&times;</button>
            </td>
        `;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }


}
