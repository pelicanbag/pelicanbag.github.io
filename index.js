const startButton = document.querySelector(".header_background_button");

startButton.onclick = () => {
    document.querySelector(".start-screen").classList.add("transition-hidden");
    document.querySelectorAll(".main-content").forEach((node) => {
        node.classList.remove("hidden");
        node.classList.add("transition-appear");
    })
    setTimeout(() => {
        document.querySelector(".start-screen").classList.add("hidden");
    }, 2000)
}