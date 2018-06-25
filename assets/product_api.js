/***PRODUCT API***/

var potionsFile = 'assets/potions.json';
var xhr = new XMLHttpRequest();

//check for async loading
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = '';
        myArr = JSON.parse(this.responseText);
        getData(myArr);
    }
};

xhr.open("GET", potionsFile);
xhr.send();


//receive async data and create div + contents in page
function getData(arr) {
    var potionsBody = document.getElementById("potions");

    for(i in arr.potions) {//create-append images and text
    var div = document.createElement("DIV");
        div.className = "potions-item";
    var images = document.createElement("IMG");
        images.src = "assets/products/" + arr.potions[i].image; //set srcs
        images.className = "potions-img"; //set class
        images.href = "href", "#";
        div.appendChild(images);
    var h3_name = document.createElement("H3");
        h3_name.className = "product-name";
    var product_name = document.createTextNode(arr.potions[i].name);
        h3_name.appendChild(product_name);
        
        span_price = document.createElement("span");
        span_price.className = "price";
    var product_price = document.createTextNode("$ "+arr.potions[i].price);
        span_price.appendChild(product_price);
        div.appendChild(h3_name);
        div.appendChild(span_price);
        potionsBody.appendChild(div);//final append

        /*Call light box and pass values*/
        var p_effect = document.createElement("P");
        var useEffect = document.createTextNode(arr.potions[i].effect);
        var ingredients = (document.createTextNode( (arr.potions[i].ingredients).join("<br>") ));
        p_effect.appendChild(useEffect);

        //Open Light box with clicked position
        openLiteBox(images, product_name, useEffect, ingredients, product_price);
        
    }/*Styles are in css*/
}

function openLiteBox(images, product_name, useEffect, ingredients, product_price) {
    var imgLiteBox = document.getElementById("img-lite-box");
    var lightbox = document.getElementById("lightbox");
    var productInfos = document.getElementById("right-lite-box");

        images.onclick = function() {

            lightbox.style.display = "block";
            imgLiteBox.src = this.src;
      
            productInfos.innerHTML = 
                "<h2 class='product-name-lt'>" + product_name.textContent + "</h2>" +
                "<h2>Use/Effect: </h2>" + useEffect.textContent + "<br>" +
                "<h2>Ingredients: </h2>" + ingredients.textContent +
                "<h2 class='price-tag'>Price: </h2>" + "<h2 class='price-lt'>" + product_price.textContent + "</h2>"+
                "<button class='add-to-cart'>Add to Cart</button>";
        }
}

function closeLiteBox(){
    lightbox.style.display = "none";
}


/*MOBILE MENU OPEN-CLOSE-RESET*/

var navBar = document.getElementsByClassName("bar")[0];
var search = document.getElementsByClassName("search-box")[0];
var openMobileBtn = document.getElementsByClassName("open-mobile-menu")[0];
var closeMobileBtn = document.getElementsByClassName("close-mobile-menu")[0];


function openMobileMenu() {
    navBar.style.display = "block";
    search.style.display = "block";
    closeMobileBtn.style.display = "block";
    openMobileBtn.style.display = "none";
}

function closeMobileMenu() {
    navBar.style.display = "none";
    search.style.display = "none";
    closeMobileBtn.style.display = "none";
    openMobileBtn.style.display = "block";
}

/* Reset or clear to previus layout state */
var media = window.matchMedia("(min-width: 630px)");

function mediaClearHandler(event){
    if(event.matches){//if > 630px
        navBar.style.display = "block";
        search.style.display = "block";
        openMobileBtn.style.display = "none";
        closeMobileBtn.style.display = "none";
    } else {//if < 630px
        openMobileBtn.style.display = "block";
        navBar.style.display = "none";
        search.style.display = "none";
    }
}

media.addListener(mediaClearHandler);