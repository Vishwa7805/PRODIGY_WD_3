const vegetablesContainer = document.querySelector(".vegetable_container");
const fruitsContainer = document.querySelector(".fruits_container");
const freshnutsContainer = document.querySelector(".freshnuts_container");
const leafygreenContainer = document.querySelector(".leafygreen_container");
const rootContainer = document.querySelector(".root_container");
const navigator = document.querySelector(".navigator");
let currentContainer;

initialize();
function initialize() {
    currentContainer = document.querySelector(".vegetable_container");
    vegetablesContainer.style.display = "flex";
}

function displayVegetables() {
    navigator.style.left = "0%";
    currentContainer.style.display = "none";
    vegetablesContainer.style.display = "flex";
    currentContainer = vegetablesContainer;
}

function displayFruits() {
    navigator.style.left = "20%";
    currentContainer.style.display = "none";
    fruitsContainer.style.display = "flex";
    currentContainer = fruitsContainer;
}

function displayfreshnuts() {
    navigator.style.left = "40%";
    currentContainer.style.display = "none";
    freshnutsContainer.style.display = "flex";
    currentContainer = freshnutsContainer;
}

function displayleafygreen() {
    navigator.style.left = "60%";
    currentContainer.style.display = "none";
    leafygreenContainer.style.display = "flex";
    currentContainer = leafygreenContainer;
}

function displayroot() {
    navigator.style.left = "80%";
    currentContainer.style.display = "none";
    rootContainer.style.display = "flex";
    currentContainer = rootContainer;
}

const sidebar = document.querySelector(".side_bar");
function showSidebar() {
    sidebar.style.transform = "translateX(0px)";
}

function hideSidebar() {
    sidebar.style.transform = "translateX(350px)";
}