const menuitems = window.document.getElementById('menuitems');

menuitems.style.maxHeight = "0rem";

function menutoggle(){
    if (menuitems.style.maxHeight == "0rem")
    {
        menuitems.style.maxHeight = "12.5rem";
    }
    else {
        menuitems.style.maxHeight = "0rem";
    }
}


/* ---------- js for product gallery ---------- */

const ProductImg = window.document.getElementById('ProductImg');
const SmallImg = window.document.getElementsByClassName('small-img');


SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}

SmallImg[4].onclick = function() {
    ProductImg.src = SmallImg[4].src;
}