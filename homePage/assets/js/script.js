//evento de abrir menu clicando no bars
document.querySelector(".open-menu").addEventListener("click", e => {

    document.querySelector("header .menu").classList.add("open");

});

//evento de fechar menu clicando no X
document.querySelector(".close-menu button").addEventListener("click", e => {

    document.querySelector("header .menu").classList.remove("open");

});

//evento de fechar menu clicando no body
document.querySelector(".menu .backdrop").addEventListener("click", e => {

    document.querySelector("header .menu").classList.remove("open");

});