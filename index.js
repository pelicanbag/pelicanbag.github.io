const startButton = document.querySelector(".header_background_button");
const products = document.querySelectorAll(".product");
const pelicanBody = document.getElementById("pelican-shop");

const modalFollow = document.querySelector(".modal--follow-on-instagram ");

startButton.onclick = () => {
    document.querySelector(".start-screen").classList.add("transition-hidden");
    document.querySelectorAll(".main-content").forEach((node) => {
        node.classList.remove("hidden");
        node.classList.add("transition-appear");
    })
    setTimeout(() => {
        document.querySelector(".start-screen").classList.add("hidden");
    }, 2000);
};

products.forEach((product) => {
    product.onclick = () => {
        pelicanBody.classList.add("stop-scrolling");
        modalFollow.classList.remove("hidden");
    };

});

const exitModal = () => {
    pelicanBody.classList.remove("stop-scrolling");
    modalFollow.classList.add("hidden");
};

document.querySelector(".modal_wrapper").onclick = (e) => {
    e.stopPropagation();
}

document.querySelector(".fa-times-circle").onclick = exitModal;
modalFollow.onclick = exitModal;