const listaPosts = [
  {
    id:1,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img1.jpg",
  },
  {
    id:2,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img2.jpg",
  },
  {
    id:3,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img3.jpg",
  },
  {
    id:4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/img4.webp",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaPosts.forEach((post) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${post.imgURL} /> 
                <h2 class="card-titulo"> ${post.titulo} </h2>
                <p class="card-descricao"> ${post.descricao} </p>
                <a class="card-botao" idAnimal="${animal.id}">
                  ADOTAR
                </div>
        `;
    container.innerHTML += card;
  });
};

window.onload = () => {
  criacaoPosts();

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });
  });
};

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (botaoTema.checked) {
    body.classList.add("body-dark");
  } else {
    body.classList.remove("body-dark");
  }
});

inputTeste = document.getElementById("inputTeste");

inputTeste.addEventListener("keypress", (tecla) => {
  alert("Tecla pressionada: " + tecla.key);
});

window.onload = () => {
  criacaoCards();

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });

    card.lastElementChild.addEventListener("click", () => {
      event.preventDefault();
      sessionStorage.setItem("idAnimal", card.lastElementChild.getAttribute("idAnimal"));
      window.location.href = "../adotar.html";
    });
  });
};
