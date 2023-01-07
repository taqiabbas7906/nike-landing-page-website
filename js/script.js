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
let amountInput = document.querySelector(".amountInput");
let increaseAmount = amountInput.previousElementSibling;
let decreaseAmount = amountInput.nextElementSibling;
let sizeArr = document.querySelectorAll(".sizeOption");
let colorOptionArr = document.querySelectorAll(".colorOption");
let cartBtn = document.querySelector(".cartBtn");
let galleryBack = document.querySelector(".galleryHeading");
let footerMain = document.querySelector(".footerMainContainer");
let navBtn = document.querySelector(".navBtn");
let navContainer = document.querySelector(".navContainer");
let selectedColor = 0;
let shoeIndex = 0;
let selectedSize = "M";
let shoeObj = [
  {
    index: 0,
    startName: "Nike Air",
    lastName: "Force 1",
    color: "#303234",
    circleColor: "#D9D9D9",
    startPrice: "200$",
    endPrice: "99$",
    imgLink: "img/nike af1.png",
    smallName: "AF1",
    moreColors: ["white", "black"],
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
    moreColors: ["tomato", "lightblue"],
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
    moreColors: ["purple", "red"],
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
    moreColors: ["grey", "red"],
  },
];

shoeSelect.forEach((element) => {
  element.addEventListener("click", () => {
    shoeIndex = Array.from(shoeSelect).indexOf(element);
    shoeImg.src = shoeObj[shoeIndex].imgLink;
    buyShoeImg.src = shoeObj[shoeIndex].imgLink;
    firstName.innerText = shoeObj[shoeIndex].startName;
    secondName.innerText = shoeObj[shoeIndex].lastName;
    buyShoeHeading.innerText = `${shoeObj[shoeIndex].startName} ${shoeObj[shoeIndex].lastName}`;
    firstPrice.innerText = shoeObj[shoeIndex].startPrice;
    colorOptionArr.forEach((element) => {
      element.style.border = "none";
    });
    sizeArr.forEach((element) => {
      element.style.border = "none";
    });
    colorOptionArr[0].style.backgroundColor = shoeObj[shoeIndex].moreColors[0];
    colorOptionArr[1].style.backgroundColor = shoeObj[shoeIndex].moreColors[1];
    secondPrice.innerText = shoeObj[shoeIndex].endPrice;
    buyShoeBackName.innerText = shoeObj[shoeIndex].smallName;

    shoeSelect.forEach((border) => {
      border.style.border = "1rem solid white";
    });
    element.style.border = "3rem solid #0085FF";
    mainContainer.style.backgroundColor = shoeObj[shoeIndex].color;
    galleryBack.style.backgroundColor = shoeObj[shoeIndex].color;
    footerMain.style.backgroundColor = shoeObj[shoeIndex].color;
    rightBuyMainContainer.style.backgroundColor = shoeObj[shoeIndex].color;
    leftBuyMainContainer.style.backgroundColor = shoeObj[shoeIndex].circleColor;
    heroSectionCircle.forEach((circle) => {
      circle.style.backgroundColor = shoeObj[shoeIndex].circleColor;
    });
  });
});

// Amount Increaser and Decreaser
let finalAmount = parseInt(amountInput.innerText);
increaseAmount.addEventListener("click", () => {
  if (finalAmount == 20) {
  } else {
    finalAmount = finalAmount + 1;
    amountInput.innerText = finalAmount;
  }
});
decreaseAmount.addEventListener("click", () => {
  if (finalAmount == 1) {
  } else {
    finalAmount = finalAmount - 1;
    amountInput.innerText = finalAmount;
  }
});

// Size Selector
sizeArr.forEach((element) => {
  element.addEventListener("click", () => {
    selectedSize = element.innerText;
    sizeArr.forEach((element) => {
      element.style.border = "none";
    });
    element.style.border = "3rem solid #0085FF";
  });
});

// Color Selector
let colorImgArr = [
  {
    0: "img/nike af1.png",
    1: "img/nike af1 b.webp",
  },
  {
    0: "img/nike blazers.png",
    1: "img/nike blazers b.webp",
  },
  {
    0: "img/nike aj.png",
    1: "img/nike aj r.webp",
  },
  {
    0: "img/nike am1.png",
    1: "img/nike am r.webp",
  },
];

colorOptionArr.forEach((element) => {
  element.addEventListener("click", () => {
    selectedColor = Array.from(colorOptionArr).indexOf(element);
    selectedColor = parseInt(selectedColor);
    colorOptionArr.forEach((element) => {
      element.style.border = "none";
    });
    element.style.border = "3rem solid #0085FF";
    buyShoeImg.src = colorImgArr[shoeIndex][selectedColor];
  });
});

cartBtn.addEventListener("click", () => {
  localStorage.setItem(
    "shoeName",
    `${shoeObj[shoeIndex].startName} ${shoeObj[shoeIndex].lastName}`
  );
  localStorage.setItem("shoeAmount", `${amountInput.innerHTML}`);
  localStorage.setItem("shoeSize", `${selectedSize}`);
  localStorage.setItem(
    "shoeColor",
    `${colorOptionArr[selectedColor].style.backgroundColor}`
  );
  console.log(Array.from(colorOptionArr)[selectedColor].backgroundColor);
});

// Navigation Active Shower
navBtn.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});
