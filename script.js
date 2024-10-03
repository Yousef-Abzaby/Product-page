const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("number");
const cartIcon = document.getElementById("cart")
const cartText = document.getElementById("cart-text");
const addBtn = document.getElementById("add-btn");
const cartBox = document.getElementById("cart-box");
const viewedImage1 = document.getElementById("vi-1");
const viewedImage2 = document.getElementById("vi-2");
const viewedImage3 = document.getElementById("vi-3");
const viewedImage4 = document.getElementById("vi-4");
const bigImage = document.getElementById("big-image");
const hiddenImages = document.getElementById("hidden-images");
const hiddenImage1 = document.getElementById("hi-1");
const hiddenImage2 = document.getElementById("hi-2");
const hiddenImage3 = document.getElementById("hi-3");
const hiddenImage4 = document.getElementById("hi-4");
const closeIcon = document.getElementById("close");
const closeIcon2 = document.getElementById("close2");
const barsIcon = document.getElementById("bars");
const hiddenBigImage = document.getElementById("main-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn2 = document.getElementById("prev-btn2");
const nextBtn2 = document.getElementById("next-btn2");
const deleteBtn = document.getElementById("delete");
const shoppingList = document.getElementById("shopping-items");
const hiddenP = document.getElementById("empty-cart")
const prize = document.getElementById("prize");
const amount = document.getElementById("amount");

// Small assumbtions
hiddenImages.style.display = "none";
shoppingList.style.display = "none";
cartBox.style.display ="none";

let total = 0;
let i = 0;
let inu = 0;

// Functions

function changeValuePositive(e) {
    i++
    e.innerHTML = i;
}

function changeValueNegative(e) {
    while (e.innerHTML != 0) {
        i--;
        e.innerHTML = i;
        break;
    }
}

function addToCart() {
    while (quantity.innerHTML != 0) {
        total += i;
        cartText.innerHTML = total;
        quantity.innerHTML = 0;
        shoppingList.style.display = "flex";
        hiddenP.style.display = "none";
        prize.innerText = "$" + total * 125 + ".00";
        amount.innerText = total;
        i = 0;
        break
    }
}

function toggleCartBox() {
    if (cartBox.style.display === "none") {
        cartBox.style.display = "block"
    } else {
        cartBox.style.display = "none"
    }
}

function showHiddenImages(image1, image2, image3, image4) {
    hiddenImages.style.display = "block";
    hiddenBigImage.style.backgroundImage = "url(" + JSON.stringify(image1.src).replace('-thumbnail','') + ")";
    image1.classList.add("selected");
    image2.classList.remove("selected");
    image3.classList.remove("selected");
    image4.classList.remove("selected");
    document.querySelector("body").style.overflow = "hidden";
}

function prevImage(image1, image2, image3, image4) {
    if (inu < 4 && inu > 0) {
        inu--;
    } else if (inu == 0) {
        inu = 3;
    }
    let images = [image1, image2, image3, image4];
    hiddenBigImage.style.backgroundImage = "url(" + JSON.stringify(images[inu].src).replace('-thumbnail','') + ")";
    bigImage.src = images[inu].src.replace('-thumbnail','');
    for (let x = 0; x < 4; x++){
        if (x !== inu) {
            images[x].classList.remove("selected");
        } else {
            images[x].classList.add("selected");
        }
    }
}

function nextImage(image1, image2, image3, image4) {
    if (inu < 3) {
        inu++;
    } else if (inu == 3) {
        inu = 0;
    }
    let images = [image1, image2, image3, image4];
    hiddenBigImage.style.backgroundImage = "url(" + JSON.stringify(images[inu].src).replace('-thumbnail','') + ")";
    bigImage.src =  images[inu].src.replace('-thumbnail','');
    for (let x = 0; x < 4; x++){
        if (x !== inu) {
            images[x].classList.remove("selected");
        } else {
            images[x].classList.add("selected");
        }
    }
}


function hideShownImages() {
    hiddenImages.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}

function deleteCart() {
    
}


// assignments


plus.addEventListener("click", () => {
    changeValuePositive(quantity);
})

minus.addEventListener("click", () => {
    changeValueNegative(quantity);
})

addBtn.addEventListener("click", () => {
    addToCart();
})

cartIcon.addEventListener("click", () => {
    toggleCartBox();
})

bigImage.addEventListener("click", () => showHiddenImages(viewedImage1, viewedImage2, viewedImage3, viewedImage4))
viewedImage1.addEventListener("click", () => showHiddenImages(viewedImage1, viewedImage2, viewedImage3, viewedImage4))
viewedImage2.addEventListener("click", () => showHiddenImages(viewedImage2, viewedImage1, viewedImage3, viewedImage4))
viewedImage3.addEventListener("click", () => showHiddenImages(viewedImage3, viewedImage2, viewedImage1, viewedImage4))
viewedImage4.addEventListener("click", () => showHiddenImages(viewedImage4, viewedImage2, viewedImage3, viewedImage1))

hiddenImage1.addEventListener("click", () => showHiddenImages(hiddenImage1, hiddenImage2, hiddenImage3, hiddenImage4))
hiddenImage2.addEventListener("click", () => showHiddenImages(hiddenImage2, hiddenImage1, hiddenImage3, hiddenImage4))
hiddenImage3.addEventListener("click", () => showHiddenImages(hiddenImage3, hiddenImage2, hiddenImage1, hiddenImage4))
hiddenImage4.addEventListener("click", () => showHiddenImages(hiddenImage4, hiddenImage2, hiddenImage3, hiddenImage1))

prevBtn.addEventListener("click", () => prevImage(hiddenImage1, hiddenImage2, hiddenImage3, hiddenImage4))
nextBtn.addEventListener("click", () => nextImage(hiddenImage1, hiddenImage2, hiddenImage3, hiddenImage4))
prevBtn2.addEventListener("click", () => prevImage(hiddenImage1, hiddenImage2, hiddenImage3, hiddenImage4))
nextBtn2.addEventListener("click", () => nextImage(hiddenImage1, hiddenImage2, hiddenImage3, hiddenImage4))

deleteBtn.addEventListener("click", () => {
    hiddenP.style.display = "block";
    shoppingList.style.display = "none";
    cartText.innerHTML = "";
    total = 0
})

closeIcon.addEventListener("click", () => hideShownImages())

closeIcon2.addEventListener("click", () => {
    document.querySelector("nav").style.display = "none"
})

barsIcon.addEventListener("click", () => {
    document.querySelector("nav").style.display = "flex"
})