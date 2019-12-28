const hamburger = document.getElementById("header-hamburger");

hamburger && hamburger.addEventListener("click", (event) => {
    const navigation = document.getElementById("header-navigation");
    navigation.classList.toggle("header-navigation--open");
    event.stopPropagation();
});

const galleryInfoIcon = document.getElementById("info-icon");

galleryInfoIcon && galleryInfoIcon.addEventListener("click", (event) => {
    const galleryInfoBlock = document.getElementById("gallery-item-info");

    galleryInfoBlock.classList.toggle("gallery-item--visible");
});
