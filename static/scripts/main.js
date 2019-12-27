const hamburger = document.getElementById("header-hamburger");
const navigation = document.getElementById("header-navigation");

hamburger.addEventListener("click", (event) => {
    navigation.classList.toggle("header-navigation--open");
    event.stopPropagation();
});
