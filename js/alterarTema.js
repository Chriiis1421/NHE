let botaotema = document.querySelector("#botaoTema");

botaotema.addEventListener("click", () => {
    let body = document.querySelector("body");

    if (botaotema.checked) {
        body.classList.add("body-dark");
    } else {
        body.classList.remove("body-dark");
    }
});