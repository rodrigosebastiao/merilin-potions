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
//variables for creation of div+img+txt content
var potionsBody = document.getElementById("potions");
var lightbox = document.getElementById("lightbox");
var division = document.getElementById("division");
var closeBox = document.getElementById("close-box");
var out = '';
var outImg = "";
var div;
var images;
var product;
var pdt_txt;
var prc_txt;
var price;
var useEffect;
var effect;
var ingredients;
var button;

//receive async data and create div + contents
function getData(arr) {
    /*for styles see css*/
    for(i in arr.potions) {//create-append images and text
        div = document.createElement("DIV");
        div.className = "potions-item";
        images = document.createElement("IMG");
        images.src = "assets/products/" + arr.potions[i].image; //set srcs
        images.className = "potions-img"; //set class
        images.href = "href", "#";
        div.appendChild(images);
        product = document.createElement("H3");
            pdt_txt = document.createTextNode(arr.potions[i].name + " - ");
        price = document.createElement("SPAN");
            prc_txt = document.createTextNode("$ "+arr.potions[i].price);
        price.appendChild(prc_txt);
        product.appendChild(pdt_txt);
        product.appendChild(price);
        product.className = "product";
        div.appendChild(product);
        potionsBody.appendChild(div);//final append
        
        /*Call light box onclick*/
        images.onclick = function(){
            openLiteBox(arr);
        }
     }
        /*for styles see css*/         
}

function openLiteBox(arr){
     for (i in arr.potions) {//create Lightbox and append images and text
        /*LIGHTBOX*/
        images = document.createElement("IMG");
        images.width = "400";
        images.height = "400";
        division.appendChild(images);
        division.appendChild(pdt_txt);
        useEffect = document.createTextNode("Use/Effect:");
        effect = document.createTextNode(arr.potions[i].effect);
        division.appendChild(useEffect);
        ingredients = document.createTextNode("Ingredients:");
        division.appendChild(ingredients);
        division.appendChild(price);
        button = document.createElement("BUTTON");
        button.createTextNode = "ADD TO CART";
        division.appendChild(button);
        lightbox.appendChild(division);
    }
    lightbox.style.display = "block";
}

function closeLiteBox(){
    lightbox.style.display = "none";
}


/*MOBILE MENU OPEN CLOSE*/

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