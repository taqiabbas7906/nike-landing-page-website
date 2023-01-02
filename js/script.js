// Variables
// Variables
let shoeSelect = document.querySelectorAll(".shoe");
let shoeImg = document.querySelector(".shoeImg");
let heroSectionCircle = document.querySelectorAll(".mainColor");
let mainContainer = document.querySelector(".mainContainer");
let firstName = document.querySelector(".firstName");
let secondName = document.querySelector(".secondName");
let firstPrice = document.querySelector(".firstPrice");
let secondPrice = document.querySelector(".secondPrice");
let rightBuyMainContainer = document.querySelector(".buyMainContainer");
let leftBuyMainContainer = document.querySelector(".secondHalf");
let buyShoeBackName = document.querySelector(".buyShoeName");
let buyShoeImg = document.querySelector(".buyShoeImg");
let buyShoeHeading = document.querySelector(".buyHeading");
let shoe = [
  {
    index: 0,
    startName: "Nike Air",
    lastName: "Force 1",
    color: "#000000",
    circleColor: "#D9D9D9",
    startPrice: "200$",
    endPrice: "99$",
    imgLink: "img/nike af1.png",
    smallName: "AF1",
  },
  {
    index: 1,
    startName: "Nike",
    lastName: "Blazers",
    color: "#D42523",
    circleColor: "#A2A2A1FF",
    startPrice: "150$",
    endPrice: "80$",
    imgLink: "img/nike blazers.png",
    smallName: "BLAZERS",
  },
  {
    index: 2,
    startName: "Nike Air",
    lastName: "Jordan",
    color: "#C87C18",
    circleColor: "#3D3772",
    startPrice: "250$",
    endPrice: "120$",
    imgLink: "img/nike aj.png",
    smallName: "JORDAN",
  },
  {
    index: 3,
    startName: "Nike Air",
    lastName: "Max",
    color: "#385B7A",
    circleColor: "#CA9F99",
    startPrice: "220$",
    endPrice: "100$",
    imgLink: "img/nike am1.png",
    smallName: "MAX",
  },
];

shoeSelect.forEach((element) => {
  element.addEventListener("click", () => {
    let shoeIndex = Array.from(shoeSelect).indexOf(element);
    shoeImg.src = shoe[shoeIndex].imgLink;
    buyShoeImg.src = shoe[shoeIndex].imgLink;
    firstName.innerText = shoe[shoeIndex].startName;
    secondName.innerText = shoe[shoeIndex].lastName;
    buyShoeHeading.innerText =
      shoe[shoeIndex].startName + " " + shoe[shoeIndex].lastName;
    firstPrice.innerText = shoe[shoeIndex].startPrice;
    secondPrice.innerText = shoe[shoeIndex].endPrice;
    buyShoeBackName.innerText = shoe[shoeIndex].smallName;

    shoeSelect.forEach((border) => {
      border.style.border = "1px solid white";
    });
    element.style.border = "3px solid #0085FF";
    mainContainer.style.backgroundColor = shoe[shoeIndex].color;
    rightBuyMainContainer.style.backgroundColor = shoe[shoeIndex].color;
    leftBuyMainContainer.style.backgroundColor = shoe[shoeIndex].circleColor;
    heroSectionCircle.forEach((circle) => {
      circle.style.backgroundColor = shoe[shoeIndex].circleColor;
    });
  });
});
