const hamburger = document.getElementById("header-hamburger");
const navigation = document.getElementById("header-navigation");

hamburger.addEventListener("click", (event) => {
    navigation.classList.toggle("header-navigation--open");
    event.stopPropagation();
});

const galleryInfoIcon = document.getElementById("info-icon");
const galleryInfoBlock = document.getElementById("gallery-item-info")

galleryInfoIcon.addEventListener("click", (event) => {
    galleryInfoBlock.classList.toggle("gallery-item--visible")
})
