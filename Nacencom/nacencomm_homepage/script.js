const page = document.querySelector("html");
const menuBar = document.querySelector(".header-menu-bar");
const menuBarContent = document.querySelector(".header-menu-bar-contents");
const language = document.querySelector(".header-right-language");
const languageContent = document.querySelector(".header-right-language-content");
const product = document.querySelector(".header-right-product");
const support = document.querySelector(".header-right-support");
const solution = document.querySelector(".header-right-solution");
const search = document.querySelector(".header-right-find-search");
const searchFind = document.querySelector(".header-right-find-search > i");
const searchInput = document.querySelector(".header-right-find-search > input");
const find = document.querySelector(".header-right-find");
const apps = document.querySelector(".header-right-app");
const x = document.querySelector(".header-right-app-window-option > i");
const appWindow = document.querySelector(".header-right-app-window");
const appMenu = document.querySelector(".header-menu-bar-option-app");

let isMenuBarContentOpen = false;
let isLanguageContentOpen = false;
let isProductOpen = true;
let isSupportOpen = false;
let isSolutionOpen = false;
let isSearchingOpen = false;

AOS.init();

product.addEventListener("click", (event) => {
    event.preventDefault();
    if (!isProductOpen) {
        product.classList.add("header-right-product-open");
        support.classList.remove("header-right-support-open");
        solution.classList.remove("header-right-solution-open");
        product.style.color = "#0055e6";
        support.style.color = "#565656";
        solution.style.color = "#565656";
        isProductOpen = true;
        isSupportOpen = false;
        isSolutionOpen = false;
    }
});

support.addEventListener("click", (event) => {
    event.preventDefault();
    if (!isSupportOpen) {
        support.classList.add("header-right-support-open");
        product.classList.remove("header-right-product-open");
        solution.classList.remove("header-right-solution-open");
        product.style.color = "#565656";
        support.style.color = "#0055e6";
        solution.style.color = "#565656";
        isProductOpen = false;
        isSupportOpen = true;
        isSolutionOpen = false;
    }
});

solution.addEventListener("click", (event) => {
    event.preventDefault();
    if (!isProductOpen) {
        solution.classList.add("header-right-solution-open");
        support.classList.remove("header-right-support-open");
        product.classList.remove("header-right-product-open");
        product.style.color = "#565656";
        support.style.color = "#565656";
        solution.style.color = "#0055e6";
        isProductOpen = false;
        isSupportOpen = false;
        isSolutionOpen = true;
    }
});

menuBar.addEventListener("click", () => {
    if (!isMenuBarContentOpen) {
        menuBarContent.style.opacity = "1";
        menuBarContent.style.visibility = "visible";
        menuBarContent.style.transform = "none";
        isMenuBarContentOpen = true;
    } else {
        menuBarContent.style.opacity = "0";
        menuBarContent.style.visibility = "hidden";
        menuBarContent.style.transform = "scale(0.75, 0.5625)";
        isMenuBarContentOpen = false;
    }
});

language.addEventListener("click", () => {
    if (!isLanguageContentOpen) {
        languageContent.style.opacity = "1";
        languageContent.style.visibility = "visible";
        languageContent.style.transform = "none";
        isLanguageContentOpen = true;
    } else {
        languageContent.style.opacity = "0";
        languageContent.style.visibility = "hidden";
        languageContent.style.transform = "scale(0.75, 0.5625)";
        isLanguageContentOpen = false;
    }
});

find.addEventListener("click", () => {
    if (!isSearchingOpen) {
        isSearchingOpen = true;
        find.style.display = "none";
        search.style.width = "210px";
        searchFind.style.display = "block";
        searchInput.style.paddingLeft = "20px";
        searchInput.style.paddingRight = "40px";
        searchInput.style.width = "150px";
    }
});

apps.addEventListener("click", () => {
    appWindow.style.transform = "translateY(-11%)";
    appWindow.style.position = "fixed";
    page.style.overflow = "hidden";
});

appMenu.addEventListener("click", () => {
    appWindow.style.transform = "translateY(-11%)";
    appWindow.style.position = "fixed";
    page.style.overflow = "hidden";
});

x.addEventListener("click", () => {
    appWindow.style.transform = "translateY(-200%)";
    appWindow.style.position = "absolute";
    page.style.overflow = "visible";
});

page.addEventListener("click", (e) => {
    if (isLanguageContentOpen && !language.contains(e.target)) {
        languageContent.style.opacity = "0";
        languageContent.style.visibility = "hidden";
        languageContent.style.transform = "scale(0.75, 0.5625)";
        isLanguageContentOpen = false;
    }

    if (isMenuBarContentOpen && !menuBar.contains(e.target)) {
        menuBarContent.style.opacity = "0";
        languageContent.style.visibility = "visible";
        languageContent.style.transform = "none";
        isMenuBarContentOpen = false;
    }

    if (isSearchingOpen && !search.contains(e.target) && !find.contains(e.target)) {
        isSearchingOpen = false;
        find.style.display = "block";
        search.style.width = "0px";
        searchFind.style.display = "none";
        searchInput.style.padding = "0px";
        searchInput.style.width = "0px";
        searchInput.value = "";
    }
});

const swiper1 = new Swiper(".swiper1", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    crossFade: true,
    speed: 2000,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: ".swiper1-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper1-button-next",
        prevEl: ".swiper1-button-prev",
    },
});

const swiper2 = new Swiper(".swiper2", {
    direction: "horizontal",
    spaceBetween: 1,
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,

    pagination: {
        el: ".swiper-pagination.swiper2-pagination",
        clickable: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },

    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 1,
        },

        1189: {
            slidesPerView: 2,
            spaceBetween: 1,
        },

        1440: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
    },

    navigation: {
        nextEl: ".swiper2-button-next",
        prevEl: ".swiper2-button-prev",
    },
});
